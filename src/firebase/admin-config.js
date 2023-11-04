import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from "firebase-admin/firestore"
const firebaseAdminConfig = {
    credential: cert(process.env.FIREBASE_SECRET_KEY)
}

if (!getApps().length) {
    initializeApp(firebaseAdminConfig)
}
const adminAuth = getAuth()
const adminFirestore = getFirestore()
export { adminAuth, adminFirestore }