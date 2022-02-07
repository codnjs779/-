import React from "react";
import styles from "./LogoutBtn.module.css";
const LogoutBtn = ({ onLogout }) => {
    const onClick = () => {
        onLogout();
    };
    return (
        <button className={styles.logoutBtn} onClick={onClick}>
            <i className="fas fa-power-off"></i>
        </button>
    );
};

export default LogoutBtn;
