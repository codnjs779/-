import React from "react";
import styles from "./MiniBox.module.css";

const MiniBox = () => {
    return (
        <li className={styles.minibox}>
            <div className={styles.date}>22-02-05</div>
            <div className={styles.emoji}>😎</div>
        </li>
    );
};

export default MiniBox;
