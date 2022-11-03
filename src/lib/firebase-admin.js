import admin from "firebase-admin"
//TODO: import private key
import * as serviceAccount from "../../firebaseKey"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin