import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./components/login/Login";
import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import Edit from "./components/editPage/Edit";

function App({ authService, dayRepository }) {
    //state
    const [userDiary, setUserDiary] = useState({});

    //locate
    const location = useLocation();
    const locationState = location?.state;
    console.log(`location`, location);

    //login
    const [userId, setUserId] = useState(locationState && locationState.id);

    //func

    const userDataController = (day) => {
        setUserDiary((userDiary) => {
            const newObj = { ...userDiary };
            newObj[day.id] = day;
            return newObj;
        });
        dayRepository.saveDiary(userId, day);
    };

    const deletList = (day) => {
        setUserDiary((userDiary) => {
            const updated = { ...userDiary };
            delete updated[day.id];
            return updated;
        });
        dayRepository.removeDiary(userId, day);
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = dayRepository.syncDiary(userId, (userDiary) => {
            setUserDiary(userDiary);
        });
        return () => stopSync(); //
    }, [userId, dayRepository]);

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} setUserId={setUserId} />} />
                <Route path="/writelist" element={<WriteList userDiary={userDiary} authService={authService} />} />
                <Route path="/today" element={<Today addList={userDataController} />} />
                <Route path="/edit" element={<Edit editList={userDataController} deletList={deletList} />} />
            </Routes>
        </div>
    );
}

export default App;
