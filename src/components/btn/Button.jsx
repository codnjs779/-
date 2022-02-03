import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} type="submit" className={styles.button}>
            {text}
        </button>
    );
};

export default Button;
