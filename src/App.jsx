import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";

import WriteList from "./components/list/WriteList";
import Today from "./components/todayDiary/Today";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App({ authService, dayRepository }) {
    //state
    const [userDiary, setUserDiary] = useState({});

    //locate
    const location = useLocation();
    const locationState = location?.state;
    const nextNav = useNavigate();

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
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                nextNav("/");
            }
        });
    }, [userId, nextNav, authService]);

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = dayRepository.syncDiary(userId, (userDiary) => {
            setUserDiary(userDiary);
        });
        return () => stopSync(); //
    }, [userId]);

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} />} />
                <Route path="/writelist" element={<WriteList userDiary={userDiary} authService={authService} nextNav={nextNav} editList={userDataController} deletList={deletList} />} />
                <Route path="/today" element={<Today addList={userDataController} />} />
            </Routes>
        </div>
    );
}

export default App;
