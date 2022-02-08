import React, { useRef, useState } from "react";
import Header from "../header/Header";
import styles from "../todayDiary/Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useLocation, useNavigate } from "react-router-dom";
const Edit = ({ deletList, editList }) => {
    const location = useLocation();
    const pick = location?.state.pick;
    const { date, emoji, diary } = location?.state.pick;
    const diaryRef = useRef();

    const [newDiary, setNewDiary] = useState("");
    const [pickEmotion, setPickEmotion] = useState("");

    const nextNav = useNavigate();
    const listPage = () => {
        nextNav("/writelist");
    };

    const emotionIcon = [
        { id: 1, emotion: "😁" },
        { id: 2, emotion: "😥" },
        { id: 3, emotion: "😱" },
        { id: 4, emotion: "🥰" },
        { id: 5, emotion: "😨" },
    ];

    const emojiPick = (emoji) => {
        setPickEmotion(emoji.target.value);
    };

    const emotion = emotionIcon.map((emoji) => {
        return <input onClick={(value) => emojiPick(value)} type="button" value={emoji.emotion} key={emoji.id} />;
    });

    const onChange = (e) => {
        const newDiary = e.target.value;
        setNewDiary(newDiary);
    };
    const editBtn = () => {
        let newPick = { ...pick };
        newPick.emoji = pickEmotion || emoji;
        newPick.diary = newDiary || diary;
        editList(newPick);
        listPage();
    };

    const deleteBtn = () => {
        let result = window.confirm("삭제하시겠습니까?");
        if (result) {
            alert("삭제되었습니다");
            deletList(pick);
            listPage();
        }
        return;
    };

    return (
        <div className={styles.todayBox}>
            <div className={styles.titleBar}>
                <Header title={date} />
            </div>
            <section className={styles.emtion}>
                <div className={styles.question}>
                    <div className={styles.question}>오늘의 나는?</div>
                </div>
                {pickEmotion === "" ? <div className={styles.pickEmoji}>{emoji}</div> : <div className={styles.pickEmoji}>{pickEmotion}</div>}

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>
            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>하루를 짧은 글로 정리해보세요</div>

                <div className={styles.txTBox}>
                    {" "}
                    <textarea
                        ref={diaryRef}
                        onChange={onChange} //
                        className={styles.diaryTxT}
                        maxLength="200"
                        type="text" //
                        placeholder="200자 내로 입력해주세요!"
                    >
                        {diary}
                    </textarea>
                </div>

                <div className={styles.button}>
                    <Button text="수정" onClick={editBtn}></Button>
                    <Button text="삭제" onClick={deleteBtn}></Button>
                </div>
            </section>
        </div>
    );
};

export default Edit;
