import {Firestore} from '@google-cloud/firestore';
import { request } from 'express';
import {v4 as uuidv4} from 'uuid';

export default class FirestoreAccess {
    #db: Firestore;
    constructor(projectId: string, keyFilename: string) {
        this.#db = new Firestore({
            projectId,
            keyFilename
        });
    }
    /**
     * Fetches info about listing
     * @param id 
     */
    async getListing(id: string): Promise<Listing> {
        const doc = await this.#db.collection('listings').doc(id).get();
        if (!doc.exists) {
            throw new Error("Listing " + id + " not found!");
        } else {
            return doc.data() as Listing;
        }
    }

    /**
     * Fetches all listings
     */
    async getAllListings(): Promise<object> {
        const doc = await this.#db.collection('listings').get();
        if (doc.empty) {
            throw new Error("No listings found!");
        } else {
            const offers = new Array<Listing>();
            const requests = new Array<Listing>();

            doc.forEach(listing => {
                const listingData = listing.data() as Listing;
                if(listingData.type === "Offer") {
                    offers.push(listingData);
                } else {
                    requests.push(listingData);
                }
            })
            const allListings = {offers: offers, requests: requests};
            return allListings;
        }
    }

    /**
     * Creates a listing
     * @param submitter 
     * @param item 
     * @param description 
     * @param quantity 
     * @param unit 
     * @param type 
     */
    async createListing(submitter: string, item: string, description: string, quantity: number, unit: "Kilograms" | "Containers" | "Milliliters" | "Each", type: "Request" | "Offer") {
        const timestamp = Date.now();
        const id = uuidv4();
        const doc = this.#db.collection('listings').doc(id);
        await doc.set({
            submitter, item, description, quantity, unit, type, timestamp
        });
    }
    /**
     * Registers a User
     * @param username User's username
     * @param email User's email
     * @param type User's type: "Individual" | "Organization"
     * @returns Promise containing user's assigned password
     */
    async registerUser(username: string, email: string, name: string, type: "Individual" | "Organization"): Promise<string> {
        const doc = this.#db.collection('users').doc(username);
        const password = uuidv4();
        await doc.set({
            username, email, type, name, password
        });
        return password;
    }
    /**
     * Attempts log in for user
     * @param username User's username
     * @param password User's password
     * @returns Promise containing user
     */
    async login(username: string): Promise<User> {
        const doc = await this.#db.collection('users').doc(username).get();
        if (!doc.exists) {
            throw new Error("User " + username + " not found!");
        }
        const data = doc.data() as User;
        return data;
        // if (data.password === password) {
        // } else {
        //     throw new Error("Incorrect password for user " + username);
        // }
    }

    /**
     * Adds a notification to a user
     * @param username User's username
     * @param content Notification content (text, potential link)
     * @param type Notification type. Currently either a matching listing, or receiving a message
     * @returns Promise containing success/fail result
     */
    async addNotification(username: string, content: string, type: "matchingListing" | "messageReceived"): Promise<boolean> {
        const userDoc = await this.#db.collection('users').doc(username).get();
        if (!userDoc.exists) {
            throw new Error("User " + username + " not found!");
        }
        const id = uuidv4();
        const read = false;
        const notificationTimestamp = new Date()
        const notificationDoc = this.#db.collection('notifications').doc(id);
        await notificationDoc.set({
            id, username, content, type, read, notificationTimestamp
        })
        return true
    }

    /**
     * Marks an array of notification as read
     * @param idArray notification Id
     * @returns Promise containing success/fail result
     */
    async markNotificationAsRead(idArray: Array<string>): Promise<boolean> {
        idArray.forEach(async id => {
            const docRef = await this.#db.collection('notifications').doc(id);
            // will automatically fail if doc does not exist
            docRef.update({read: true});
        });
        return true;
    }

    /**
     * Gets all of a user's notifications (lol no need for pagination/read vs. unread)
     * @param username User's username
     * @returns Promise containing all notifications
     */
    async getNotifications(username: string): Promise<Array<Notification>> {
        const notificationsRef = this.#db.collection('notifications');
        const userNotificationsSnapshot = await notificationsRef.where('username', '==', username).get();

        if (userNotificationsSnapshot.empty) {
            throw new Error("No notifications found");
        }  

        const userNotifications = [] as Array<Notification>

        userNotificationsSnapshot.forEach(async doc => {
            const data = doc.data() as Notification;
            userNotifications.push(data)
          });
        return userNotifications;
    }

    /**
     * Creates a conversation between two users
     * @param username1 User's username
     * @param username2 User's username 
     * @returns Promise containing all notifications
     */
    async createConversation(username1: string, username2: string): Promise<string> {
        const user1Doc = await this.#db.collection('users').doc(username1).get();
        const user2Doc = await this.#db.collection('users').doc(username2).get();
        if (!user1Doc.exists || !user2Doc.exists) {
            throw new Error("User not found");
        }

        const conversationsRef = this.#db.collection('conversations');
        const conversationsSnapshot = await conversationsRef.where('usernames', "array-contains", username1).get();

        if (!conversationsSnapshot.empty) {
            conversationsSnapshot.forEach(conversationDoc => {
                const conversation = conversationDoc.data() as Conversation;
                if(conversation.usernames.includes(username1) && conversation.usernames.includes(username2)) {
                    throw new Error("Conversation already exists");
                }
            })
        }  

        const id = uuidv4();
        const messages = [] as Array<Message>;
        const usernames = [username1, username2]
        const conversationDoc = this.#db.collection('conversations').doc(id);
        await conversationDoc.set({
            id, usernames, messages
        })
        return id;
    }

    /**
     * Fetches all of a user's conversations
     * @param username User's username
     * @returns Promise containing all notifications
     */
    async getConversations(username: string): Promise<Array<Conversation>> {
        const conversationsRef = this.#db.collection('conversations');
        const userConversationsSnapshot = await conversationsRef.where('usernames', "array-contains", username).get();

        if (userConversationsSnapshot.empty) {
            throw new Error("No conversations found");
        }  

        const userConversations = [] as Array<Conversation>

        userConversationsSnapshot.forEach(async doc => {
            const data = doc.data() as Conversation;
            userConversations.push(data)
          });

        return userConversations;
    }

    /**
     * Fetches all of a user's conversations
     * @param sender Sending user's username
     * @param conversationId conversation Id
     * @param text message text
     * @returns Promise containing all notifications
     */
    async addMessage(sender: string, conversationId: string, text: string): Promise<string> {
        const userDoc = await this.#db.collection('users').doc(sender).get();
        const conversationDocRef = await this.#db.collection('conversations').doc(conversationId);
        const conversationDoc = await conversationDocRef.get()
        if (!userDoc.exists || !conversationDoc.exists) {
            throw new Error("Error sending message");
        }
        const id = uuidv4();
        const read = false;
        const dateSent = new Date()
        const messageDoc = this.#db.collection('messages').doc(id);
        const messageObject = {id, dateSent, sender, text, read}

        await messageDoc.set(messageObject)

        const conversationData = conversationDoc.data()
        const messages = conversationData.messages
        messages.push(messageObject)
        await conversationDocRef.update({
            messages
        })
        return id;
    }
}