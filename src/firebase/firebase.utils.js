import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCLkvZor7vNLgSzXMaMVkYyGCZCnI8pWuY",
  authDomain: "crown-db1402.firebaseapp.com",
  projectId: "crown-db1402",
  storageBucket: "crown-db1402.appspot.com",
  messagingSenderId: "19240350596",
  appId: "1:19240350596:web:fc6bc9e05f2dc521eaa3d1",
  measurementId: "G-EJ710N05DG",
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
