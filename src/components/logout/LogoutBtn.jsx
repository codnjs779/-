import React from "react";
import styles from "./LogoutBtn.module.css";
const LogoutBtn = ({ onClick }) => {
    console.log("on");
    return (
        <button className={styles.logoutBtn} onClick={onClick}>
            <i className="fas fa-power-off"></i>
        </button>
    );
};

export default LogoutBtn;
