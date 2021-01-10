import {Firestore} from '@google-cloud/firestore';
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
    async login(username: string, password: string): Promise<User> {
        const doc = await this.#db.collection('users').doc(username).get();
        if (!doc.exists) {
            throw new Error("User " + username + " not found!");
        }
        const data = doc.data() as User;
        if (data.password === password) {
            return data;
        } else {
            throw new Error("Incorrect password for user " + username);
        }
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
     * Marks a notification as read
     * @param id notification Id
     * @returns Promise containing success/fail result
     */
    async markNotificationAsRead(id: string): Promise<boolean> {
        const docRef = await this.#db.collection('notifications').doc(id);
        // will automatically fail if doc does not exist
        docRef.update({read: true})
        return true
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
            const data = await doc.data() as Notification;
            userNotifications.push(data)
          });
        return userNotifications;
    }
}