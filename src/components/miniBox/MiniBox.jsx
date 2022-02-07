import React from "react";
import styles from "./MiniBox.module.css";

const MiniBox = ({ user, setEditSwitch, setKeyValue }) => {
    const { date, emoji } = user;
    const onClick = () => {
        setEditSwitch(true);
        setKeyValue(user);
    };
    return (
        <>
            <li className={styles.minibox} onClick={onClick}>
                <div className={styles.date}>{date}</div>
                <div className={styles.emoji}>{emoji}</div>
            </li>
        </>
    );
};

export default MiniBox;
