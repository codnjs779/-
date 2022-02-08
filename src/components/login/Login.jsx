import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
    const nextNav = useNavigate();
    const nextPage = () => {
        nextNav("/writelist");
    };

    const signHandler = (e) => {
        console.log(`ee`, e);
        authService //
            .login(e.currentTarget.textContent)
            .then((data) => nextPage(data));
    };

    return (
        <div className={styles.login}>
            <div className={styles.title}>Write.</div>
            <div className={styles.signIn}>sign in</div>
            <div className={styles.loginBox}>
                <button className={styles.loginBtn} onClick={signHandler}>
                    Google
                </button>
                <button className={styles.loginBtn} onClick={signHandler}>
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default Login;
