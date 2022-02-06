import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Today from "../todayDiary/Today";
import TodayBox from "../todayBox/TodayBox";

const WriteList = ({ authService }) => {
    const nextNav = useNavigate();
    const [userDiary, setUserDiary] = useState({});
    const [today, setToday] = useState(false);

    const writeDiary = () => {
        setToday(true);
    };

    const onLogout = () => {
        authService.logout();
        nextNav("/");
    };

    const userDataController = (day) => {
        setUserDiary((userDiary) => {
            const newObj = { ...userDiary };
            newObj[day.id] = day;
            return newObj;
        });
    };

    return (
        <>
            {today === true ? (
                <Today setToday={setToday} userDataController={userDataController} />
            ) : (
                <TodayBox
                    authService={authService}
                    userDiary={userDiary} //
                    writeDiary={writeDiary}
                    onLogout={onLogout}
                />
            )}
        </>
    );
};

export default WriteList;
