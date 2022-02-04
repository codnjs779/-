import React, { useState } from "react";
import Header from "../header/Header";
import styles from "./WriteList.module.css";
import { useNavigate } from "react-router-dom";
import pen from "../../images/pen.png";
import LogoutBtn from "../logout/LogoutBtn";
const WriteList = ({ authService }) => {
    const nextNav = useNavigate();
    const writeDiary = () => {
        nextNav("/today");
    };
    const onLogout = () => {
        authService.logout();
        nextNav("/");
    };

    const [userDiary, setUserDiary] = useState({});

    return (
        <div className={styles.WriteListBox}>
            <div className={styles.logoutBtn}>
                <LogoutBtn onClick={onLogout} />
            </div>

            <div className={styles.titleBar}>
                <Header title="나의하루들" />
            </div>

            <div className={styles.penBox} onClick={writeDiary}>
                <img src={pen} alt="pen" />
            </div>
        </div>
    );
};

export default WriteList;
