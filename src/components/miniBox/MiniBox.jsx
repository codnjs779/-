import React from "react";
import styles from "./MiniBox.module.css";

const MiniBox = ({ user, editItem }) => {
    const { date, emoji } = user;
    const editHandler = () => {
        editItem(user);
    };
    return (
        <li className={styles.minibox} onClick={editHandler}>
            <div className={styles.date}>{date}</div>
            <div className={styles.emoji}>{emoji}</div>
        </li>
    );
};

export default MiniBox;
