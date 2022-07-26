import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from '../credentials.js'


//this function checks to see if were connected to our firebase project and connects to the database
export function dbConnect() {
  if (!getApps().length) {
//if (getApps().length === 0) {   this is the same as the line above checking if the connection is connected
    initializeApp({
      credential: cert(credentials),
    })
  }
  return getFirestore()
}
