import React from "react";
import styles from "../starting/StartScreen.module.css";
import start from "../../images/first.png";
const StartScreen = () => {
    return (
        <div className={styles.startScreen}>
            <img src={start} alt="" />
        </div>
    );
};

export default StartScreen;
