import React from "react";
import styles from "./MiniBox.module.css";
import { memo } from "react";

const MiniBox = memo(({ user }) => {
    const { date, emoji } = user;

    return (
        <li className={styles.minibox}>
            <div className={styles.date}>{date}</div>
            <div className={styles.emoji}>{emoji}</div>
        </li>
    );
});

export default MiniBox;
