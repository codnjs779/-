import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

class AuthService {
    constructor() {
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
        this.facebookProvider = new FacebookAuthProvider();
    }
    login(providerName) {
        const authProvider = this.getPovider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    logout() {
        this.firebaseAuth.signOut().catch((error) => {
            console.log("err", error);
        });
    }

    onAuthChange(onUserChanged) {
        this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }

    getPovider(providerName) {
        switch (providerName) {
            case "Google":
                return this.googleProvider;
            case "Facebook":
                return this.facebookProvider;
            default:
                throw new Error("new error", providerName);
        }
    }
}

export default AuthService;
