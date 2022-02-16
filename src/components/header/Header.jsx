import React, { memo } from "react";
import styles from "./Header.module.css";

const Header = memo(({ title }) => {
    return (
        <div className={styles.header}>
            <div className={styles.titleBar}>{title}</div>
        </div>
    );
});

export default Header;
