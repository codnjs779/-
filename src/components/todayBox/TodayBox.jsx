import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import styles from "./TodayBox.module.css";

import pen from "../../images/pen.png";
import LogoutBtn from "../logout/LogoutBtn";
import MiniBox from "../miniBox/MiniBox";

const TodayBox = ({ userDiary, onLogout, nextNav, setEditSwitch, setKeyValue }) => {
    const onTodayPage = () => {
        nextNav("/today");
    };
    const miniBox = Object.keys(userDiary).map((key) => <MiniBox key={key} user={userDiary[key]} setEditSwitch={setEditSwitch} setKeyValue={setKeyValue} />);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (miniBox.length === 0) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [miniBox]);

    return (
        <>
            <div className={styles.WriteListBox}>
                <div className={styles.logoutBtn}>
                    <LogoutBtn onLogout={onLogout} />
                </div>

                <div className={styles.titleBar}>
                    <Header title="나의하루들" />
                </div>
                {loading && (
                    <>
                        <div className={styles.load}></div>
                        <div className={styles.loadMsg}>로딩중입니다!</div>
                    </>
                )}
                <div className={styles.miniboxSet}>{miniBox}</div>

                <div className={styles.penBox} onClick={onTodayPage}>
                    <img src={pen} alt="pen" />
                </div>
            </div>
        </>
    );
};

export default TodayBox;
