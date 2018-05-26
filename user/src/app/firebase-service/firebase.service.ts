import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

    private firebase = window['firebase']
    private firestore = this.firebase.firestore()
    private firestoreFieldValues = this.firebase.firestore.FieldValue

    constructor() {
        if (this.firebase == null) {
            throw ('Missing firebase on window object!')
        }
    }

    createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
        return this.firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    loginUserWithEmailAndPassword(email: string, password: string): Promise<any> {
        return this.firebase.auth().signInWithEmailAndPassword(email, password)
    }

    userLogout() {
        return this.firebase.auth().signOut()
    }

    setDataInFirestore(collection: string, document: string, data: object): Promise<any> {
        return this.firestore.collection(collection).doc(document).set(Object.assign({}, data))
    }

    updateDataInFirestore(collection: string, document: string, data: object): Promise<any> {
        return this.firestore.collection(collection).doc(document).update(Object.assign({}, data))
    }

    deleteDocumentFromFirestore(collection: string, document: string): Promise<any> {
        return this.firestore.collection(collection).doc(document).delete()
    }

    deleteFieldFromDocumentFirestore(collection: string, document: string, field: string): Promise<any> {
        return this.firestore.collection(collection).doc(document).update({ [field]: this.firestoreFieldValues.delete() })
    }

}
