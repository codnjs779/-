import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from "./components/login/Login";
import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import Edit from "./components/editPage/Edit";

function App({ authService, dayRepository }) {
    //locate
    const location = useLocation();
    const locationState = location?.state;
    const [userId, setUserId] = useState(locationState && locationState.id);
    const nextNav = useNavigate();

    //state
    const [userDiary, setUserDiary] = useState({});

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
        return () => stopSync();
    }, [userId, dayRepository]);

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                nextNav("/");
            }
        });
    }, [authService, userId, nextNav]);
    // 의존배열의 항복이 바뀔 때마다 업뎃 된다

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} setUserId={setUserId} />} />
                <Route path="/writelist" element={<WriteList authService={authService} userDiary={userDiary} />} />
                <Route path="/today" element={<Today addList={userDataController} />} />
                <Route path="/edit" element={<Edit editList={userDataController} deletList={deletList} />} />
                <Route path="*" element="not found"></Route>
            </Routes>
        </div>
    );
}

export default App;
