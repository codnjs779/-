import React from "react";
import styles from "./LogoutBtn.module.css";
const LogoutBtn = ({ onLogout }) => {
    return (
        <button className={styles.logoutBtn} onClick={onLogout}>
            <i className="fas fa-power-off"></i>
        </button>
    );
};

export default LogoutBtn;
