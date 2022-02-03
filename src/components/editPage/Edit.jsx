import React from "react";
import Button from "../btn/Button";
import Today from "../todayDiary/Today";
const Edit = () => {
    return (
        <div>
            <section>
                <Today />
            </section>
            <section>
                <Button text="수정"></Button>
                <Button text="삭제"></Button>
            </section>
        </div>
    );
};

export default Edit;
