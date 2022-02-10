import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
    const nextNav = useNavigate();

    useEffect(() => {
        authService.onAuthChange((user) => {
            user && goToList(user.id);
        });
    });

    const signHandler = (e) => {
        authService //
            .login(e.currentTarget.textContent)
            .then((data) => goToList(data.user.uid));
    };

    const goToList = (userId) => {
        nextNav("/writelist", {
            state: { id: userId },
        });
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
