import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJ5k9ut2PlIZfXKt0p3SyewgfJSun9JNk",
    authDomain: "crwn-clothing-db-8d1f0.firebaseapp.com",
    projectId: "crwn-clothing-db-8d1f0",
    storageBucket: "crwn-clothing-db-8d1f0.appspot.com",
    messagingSenderId: "395660449440",
    appId: "1:395660449440:web:528c23d02e7b24120fdbc5"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);