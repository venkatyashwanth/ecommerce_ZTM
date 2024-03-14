import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ5k9ut2PlIZfXKt0p3SyewgfJSun9JNk",
    authDomain: "crwn-clothing-db-8d1f0.firebaseapp.com",
    projectId: "crwn-clothing-db-8d1f0",
    storageBucket: "crwn-clothing-db-8d1f0.appspot.com",
    messagingSenderId: "395660449440",
    appId: "1:395660449440:web:528c23d02e7b24120fdbc5"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt

            });
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}