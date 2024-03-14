import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const getUser = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
        console.log(response);
    }
    
    useEffect(() => {
        getUser();
    }, [])

    const logoGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logoGoogleUser}>
                Sign in with google popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with google redirect
            </button>
        </div>
    )
}

export default SignIn;