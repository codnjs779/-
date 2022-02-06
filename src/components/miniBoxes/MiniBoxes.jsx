import React from "react";
import MiniBox from "../miniBox/MiniBox";
const MiniBoxes = ({ userDiary, editItem }) => {
    const miniBox = Object.keys(userDiary).map((key) => <MiniBox key={key} user={userDiary[key]} editItem={editItem} />);

    return <>{miniBox}</>;
};

export default MiniBoxes;
