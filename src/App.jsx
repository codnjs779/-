import styles from "./App.module.css";
import React from "react";
import Login from "./components/login/Login";
import StartScreen from "./components/starting/StartScreen";
import WriteList from "./components/list/WriteList";

import Edit from "./components/editPage/Edit";
import { Route, Routes } from "react-router-dom";

function App({ authService }) {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/start" element={<StartScreen />} />
                <Route path="/" element={<Login authService={authService} />} />
                <Route path="/writelist" element={<WriteList authService={authService} />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
