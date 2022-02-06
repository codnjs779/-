import React from "react";
import MiniBox from "../miniBox/MiniBox";
const MiniBoxes = ({ userDiary }) => {
    const miniBox = Object.keys(userDiary).map((key) => <MiniBox key={key} user={userDiary[key]} />);

    return <>{miniBox}</>;
};

export default MiniBoxes;
