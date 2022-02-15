import React, { memo } from "react";
import styles from "./Button.module.css";
const Button = memo(({ text, onClick }) => {
    return (
        <button onClick={onClick} type="submit" className={styles.button}>
            {text}
        </button>
    );
});

export default Button;
