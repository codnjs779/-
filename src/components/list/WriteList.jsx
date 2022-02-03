import React from "react";
import Header from "../header/Header";
import styles from "./WriteList.module.css";
import { useNavigate } from "react-router-dom";
import pen from "../../images/pen.png";
const WriteList = () => {
    const nextNav = useNavigate();
    const writeDiary = () => {
        nextNav("/today");
    };
    return (
        <div className={styles.WriteListBox}>
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
