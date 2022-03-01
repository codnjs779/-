import React, { useCallback } from "react";
import TodayBox from "../todayBox/TodayBox";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Logout from "../logout/Logout";

const WriteList = ({ authService, userDiary }) => {
    const nextNav = useNavigate();

    const onLogout = useCallback(() => {
        let result = window.confirm("로그아웃 하시겠습니까?");
        if (result) {
            authService.logout(); //
            nextNav("/");
        } else {
            return;
        }
    }, [authService, nextNav]);

    return (
        <>
            <Logout onLogout={onLogout} />
            <Header title="나의하루들" />
            <TodayBox userDiary={userDiary} />
        </>
    );
};

export default WriteList;
