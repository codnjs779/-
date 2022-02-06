import styles from "./App.module.css";
import React, { useState } from "react";
import Login from "./components/login/Login";
import StartScreen from "./components/starting/StartScreen";
import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import Edit from "./components/editPage/Edit";
import { Route, Routes } from "react-router-dom";

function App({ authService }) {
    const [userDiary, setUserDiary] = useState({ id: "", date: "", emoji: "", diary: "" });

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/start" element={<StartScreen />} />
                <Route path="/" element={<Login authService={authService} />} />
                {userDiary && <Route path="/writelist" element={<WriteList userDiary={userDiary} authService={authService} />} />}
                <Route path="/today" element={<Today userDiary={userDiary} setUserDiary={setUserDiary} />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
