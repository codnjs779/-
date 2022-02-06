import React, { useState } from "react";
import Header from "../header/Header";
import styles from "./TodayBox.module.css";

import pen from "../../images/pen.png";
import LogoutBtn from "../logout/LogoutBtn";
import MiniBoxes from "../miniBoxes/MiniBoxes";
import Edit from "../editPage/Edit";

const TodayBox = ({ userDiary, writeDiary, onLogout, userDataController }) => {
    const [edit, setEdit] = useState(false);
    const [userPick, setUserPick] = useState();
    const editItem = (user) => {
        setEdit(true);
        setUserPick(user);
    };
    return (
        <>
            {edit === true ? (
                <Edit userPick={userPick} setEdit={setEdit} userDataController={userDataController} />
            ) : (
                <div className={styles.WriteListBox}>
                    <div className={styles.logoutBtn}>
                        <LogoutBtn onClick={onLogout} />
                    </div>

                    <div className={styles.titleBar}>
                        <Header title="나의하루들" />
                    </div>

                    <div className={styles.miniboxSet}>
                        <MiniBoxes userDiary={userDiary} editItem={editItem} />
                    </div>

                    <div className={styles.penBox} onClick={writeDiary}>
                        <img src={pen} alt="pen" />
                    </div>
                </div>
            )}
        </>
    );
};

export default TodayBox;
