import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MiniBox.module.css";

const MiniBox = ({ user, pickList }) => {
    const { date, emoji } = user;
    const editNav = useNavigate();
    const pickUser = user;
    const onClick = () => {
        pickList(pickUser);
        editNav(`/edit/${pickUser.id}`);
    };
    //

    return (
        <li className={styles.minibox} onClick={onClick}>
            <div className={styles.date}>{date}</div>
            <div className={styles.emoji}>{emoji}</div>
        </li>
    );
};

export default MiniBox;
