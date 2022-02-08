import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
    const nextNav = useNavigate();
    const nextPage = () => {
        nextNav("/writelist");
    };
    const [load, setLoad] = useState();

    const signHandler = (e) => {
        alert("구글 로그인을 이용하시려면 구글홈페이지 또는 앱에서만 가능합니다!");
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
