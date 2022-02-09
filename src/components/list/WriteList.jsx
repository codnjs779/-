import React, { useCallback } from "react";
import TodayBox from "../todayBox/TodayBox";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

const WriteList = ({ userDiary, authService }) => {
    const nextNav = useNavigate();

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

export default WriteList;
