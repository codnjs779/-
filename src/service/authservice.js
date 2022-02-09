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
        this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }

    getPovider(providerName) {
        switch (providerName) {
            case "Google":
                // alert("구글 로그인을 이용하시려면 구글홈페이지 또는 앱에서만 가능합니다!");
                return this.googleProvider;
            case "Facebook":
                return this.facebookProvider;
            default:
                throw new Error("new error", providerName);
        }
    }
}

export default AuthService;
