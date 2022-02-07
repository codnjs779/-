import React from "react";
import MiniBox from "../miniBox/MiniBox";
const MiniBoxes = ({ userDiary, editModal, pickList }) => {
    const miniBox = Object.keys(userDiary).map((key) => <MiniBox key={key} user={userDiary[key]} editModal={editModal} pickList={pickList} />);

    return <>{miniBox}</>;
};

export default MiniBoxes;
