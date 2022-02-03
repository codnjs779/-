import React from "react";
import styles from "./Header.module.css";
const Header = ({ title }) => {
    return <div className={styles.titleBox}>{title}</div>;
};

export default Header;
