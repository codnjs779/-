import React, { memo } from "react";
import styles from "./Logout.module.css";

const Logout = memo(({ onLogout }) => {
    return (
        <button className={styles.logoutBtn} onClick={onLogout}>
            <i className="fas fa-power-off"></i>
        </button>
    );
});

export default Logout;
