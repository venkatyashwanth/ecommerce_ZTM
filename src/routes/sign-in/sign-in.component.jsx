import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logoGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const {user} = response;
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logoGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    )
}

export default SignIn;