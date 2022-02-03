import React from "react";
import styles from "./Login.module.css";
import title from "../../images/titleLogo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const nextNav = useNavigate();
    const nextBtn = () => {
        nextNav("/writelist");
    };
    return (
        <div className={styles.login}>
            <img src={title} className={styles.titleImg} alt="title"></img>
            <div className={styles.signIn}>sign in</div>
            <button onClick={nextBtn}>login</button>
        </div>
    );
};

export default Login;
