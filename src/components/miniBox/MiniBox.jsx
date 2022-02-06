import React from "react";
import styles from "./MiniBox.module.css";

const MiniBox = ({ userDiary }) => {
    const { date, emoji } = userDiary;
    return (
        <li className={styles.minibox}>
            <div className={styles.date}>{date}</div>
            <div className={styles.emoji}>{emoji}</div>
        </li>
    );
};

export default MiniBox;
