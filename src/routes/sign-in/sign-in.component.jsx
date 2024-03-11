import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logoGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
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