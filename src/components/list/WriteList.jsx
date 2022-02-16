import React, { useCallback } from "react";
import TodayBox from "../todayBox/TodayBox";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Logout from "../logout/Logout";

const WriteList = ({ authService, userDiary }) => {
    const nextNav = useNavigate();
    // 계속 같은 함수 쓸때 & 내용 업뎃 되어도 항상 같은 함수 호출 다른 props이 변경되어도 동일하다는 것 , 한번 만들어진 함수 재활용

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
