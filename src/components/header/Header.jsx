import React, { memo } from "react";
import styles from "./Header.module.css";

const Header = memo(({ title, onLogout }) => {
    return (
        <div className={styles.header}>
            <div className={styles.titleBar}>{title}</div>
            <button className={styles.logoutBtn} onClick={onLogout}>
                <i className="fas fa-power-off"></i>
            </button>
        </div>
    );
});

export default Header;
