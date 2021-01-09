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
    async registerUser(username: string, email: string, type: "Individual" | "Organization"): Promise<string> {
        const doc = this.#db.collection('users').doc(username);
        const password = uuidv4();
        await doc.set({
            username, email, type, password
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
}