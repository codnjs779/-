import styles from "./App.module.css";
import React, { useState } from "react";
import Login from "./components/login/Login";
import StartScreen from "./components/starting/StartScreen";
import WriteList from "./components/list/WriteList";
import Edit from "./components/editPage/Edit";
import { Route, Routes } from "react-router-dom";
import Today from "./components/todayDiary/Today";

function App({ authService }) {
    const [userDiary, setUserDiary] = useState({});

    const [pick, setPick] = useState();

    const pickList = (pickUser) => {
        setPick(pickUser);
    };
    const editList = (newPick) => {
        setUserDiary((userDiary) => {
            const updated = { ...userDiary };
            updated[newPick.id] = newPick;
            return updated;
        });
    };

    const deletList = (deletePick) => {
        setUserDiary((userDiary) => {
            const updated = { ...userDiary };
            delete updated[deletePick.id];
            return updated;
        });
    };
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/start" element={<StartScreen />} />
                <Route path="/" element={<Login authService={authService} />} />
                <Route path="/writelist" element={<WriteList userDiary={userDiary} setUserDiary={setUserDiary} pickList={pickList} authService={authService} />} />
                {pick && <Route path={`/edit/${pick.id}`} element={<Edit pick={pick} deletList={deletList} editList={editList} />} />}
            </Routes>
        </div>
    );
}

export default App;
