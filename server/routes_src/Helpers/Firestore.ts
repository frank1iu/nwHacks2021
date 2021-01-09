import {Firestore} from '@google-cloud/firestore';

export default class FirestoreAccess {
    #db: Firestore;
    constructor(projectId: string, keyFilename: string) {
        this.#db = new Firestore({
            projectId,
            keyFilename
        });
    }
    async getUser(username: string) {
        return await this.#db.collection('users').doc(username).get();
    }
}