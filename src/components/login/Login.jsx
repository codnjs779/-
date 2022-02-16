import React, { useEffect, memo } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = memo(({ authService, setUserId }) => {
    const nextNav = useNavigate();

    const goToList = () => {
        nextNav("/writelist");
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            user && goToList();
        });
    });

    const signHandler = (e) => {
        authService //
            .login(e.currentTarget.textContent)
            .then((data) => goToList(data.user.uid));
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
});

export default Login;
