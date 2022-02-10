import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./components/login/Login";
import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import Edit from "./components/editPage/Edit";

function App({ authService, dayRepository }) {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} />} />
                <Route path="/writelist" element={<WriteList authService={authService} dayRepository={dayRepository} />} />
                <Route path="/today" element={<Today />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element="not found"></Route>
            </Routes>
        </div>
    );
}

export default App;
