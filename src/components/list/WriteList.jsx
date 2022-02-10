import React, { useCallback, useState, useEffect } from "react";
import TodayBox from "../todayBox/TodayBox";
import Header from "../header/Header";
import { useNavigate, useLocation } from "react-router-dom";
import pen from "../../images/pen.png";
const WriteList = ({ authService, dayRepository }) => {
    const nextNav = useNavigate();
    //locate
    const location = useLocation();
    const locationState = location?.state;
    console.log("locationState ", locationState);
    //state
    const [userDiary, setUserDiary] = useState({});
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

    //login

    const onLogout = useCallback(() => {
        let result = window.confirm("로그아웃 하시겠습니까?");
        if (result) {
            authService.logout(); //
            nextNav("/");
        } else {
            return;
        }
    }, [authService]);

    return (
        <>
            <Header title="나의하루들" onLogout={onLogout} />
            <TodayBox userDiary={userDiary} />
        </>
    );
};
// className={styles.penBox}
export default WriteList;
