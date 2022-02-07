import React, { useState } from "react";
import TodayBox from "../todayBox/TodayBox";

import Edit from "../editPage/Edit";

const WriteList = ({ authService, userDiary, nextNav, editList, deletList }) => {
    const [editSwitch, setEditSwitch] = useState(false);
    const [keyValue, setKeyValue] = useState();

    const onLogout = () => {
        authService.logout();
    };

    return (
        <>
            {editSwitch === true ? (
                <Edit pick={keyValue} editList={editList} deletList={deletList} setEditSwitch={setEditSwitch} />
            ) : (
                <TodayBox
                    userDiary={userDiary} //
                    onLogout={onLogout}
                    nextNav={nextNav}
                    setEditSwitch={setEditSwitch}
                    setKeyValue={setKeyValue}
                />
            )}
        </>
    );
};

export default WriteList;
