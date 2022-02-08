import React from "react";
import styles from "./MiniBox.module.css";
import { useNavigate } from "react-router-dom";

const MiniBox = ({ user }) => {
    const { date, emoji } = user;
    const nextNav = useNavigate();

    const onClick = () => {
        nextNav("/edit", {
            state: {
                pick: user,
            },
        });
    }; //

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
