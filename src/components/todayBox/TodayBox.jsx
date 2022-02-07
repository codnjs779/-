import React from "react";
import Header from "../header/Header";
import styles from "./TodayBox.module.css";

import pen from "../../images/pen.png";
import LogoutBtn from "../logout/LogoutBtn";
import MiniBoxes from "../miniBoxes/MiniBoxes";

const TodayBox = ({ userDiary, writeDiary, onLogout, pickList }) => {
    return (
        <>
            <div className={styles.WriteListBox}>
                <div className={styles.logoutBtn}>
                    <LogoutBtn onClick={onLogout} />
                </div>

                <div className={styles.titleBar}>
                    <Header title="나의하루들" />
                </div>

                <div className={styles.miniboxSet}>
                    <MiniBoxes userDiary={userDiary} pickList={pickList} />
                </div>

                <div className={styles.penBox} onClick={writeDiary}>
                    <img src={pen} alt="pen" />
                </div>
            </div>
        </>
    );
};

export default TodayBox;
