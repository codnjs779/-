import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Today from "../todayDiary/Today";
import TodayBox from "../todayBox/TodayBox";

const WriteList = ({ authService, userDiary, setUserDiary, pickList }) => {
    const nextNav = useNavigate();

    const [today, setToday] = useState(false);

    const writeDiary = () => {
        setToday(true);
    };

    const onLogout = () => {
        let result = window.confirm("로그아웃 하시겠습니까?");
        if (result) {
            authService.logout(); //
            nextNav("/");
        } else {
            return;
        }
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
                    userDataController={userDataController}
                    pickList={pickList}
                />
            )}
        </>
    );
};

export default WriteList;
