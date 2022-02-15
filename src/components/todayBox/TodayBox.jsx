import React from "react";
import styles from "./TodayBox.module.css";
import pen from "../../images/pen.png";
import MiniBox from "../miniBox/MiniBox";
import { useNavigate } from "react-router-dom";

const TodayBox = ({ userDiary }) => {
    const nextNav = useNavigate();

    const todayPage = () => {
        nextNav("/today");
    };

    return (
        <>
            <div className={styles.WriteListBox}>
                <div className={styles.miniboxSet}>
                    {Object.keys(userDiary).map((key) => (
                        <MiniBox key={key} user={userDiary[key]} />
                    ))}
                </div>

                <div className={styles.penBox} onClick={todayPage}>
                    <img src={pen} alt="pen" />
                </div>
            </div>
        </>
    );
};

export default TodayBox;
