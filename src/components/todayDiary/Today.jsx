import React, { useRef, useState } from "react";
import Header from "../header/Header";
import styles from "./Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useNavigate } from "react-router-dom";

const Today = ({ setToday, userDataController }) => {
    const nextNav = useNavigate();

    const diaryRef = useRef();
    const [pickEmotion, setPickEmotion] = useState();
    const emotionIcon = [
        { id: 1, emotion: "😁" },
        { id: 2, emotion: "😥" },
        { id: 3, emotion: "😱" },
        { id: 4, emotion: "🥰" },
        { id: 5, emotion: "😨" },
    ];

    const editDate = () => {
        const today = new Date();
        let year = today.getFullYear();
        const yearString = year.toString();
        year = yearString.substring(2, 4);
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ("0" + today.getDate()).slice(-2);
        const date = year + "-" + month + "-" + day;
        return date;
    };
    const emojiPick = (emoji) => {
        setPickEmotion(emoji.target.value);
    };

    const returnList = () => {
        nextNav("/writelist");
        setToday(false);

        const diary = diaryRef.current.value;

        const day = {
            id: Date.now(),
            date: editDate(),
            emoji: pickEmotion,
            diary,
        };
        userDataController(day);
    };

    const emotion = emotionIcon.map((emoji) => {
        return <input onClick={(value) => emojiPick(value)} type="button" value={emoji.emotion} key={emoji.id} />;
    });

    return (
        <div className={styles.todayBox}>
            <div className={styles.titleBar}>
                <Header title="오늘의 일기" />
            </div>
            <section className={styles.emtion}>
                <div className={styles.question}>
                    오늘의 <strong>000님</strong>은?
                </div>
                <div>{pickEmotion}</div>

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>

            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>하루를 짧은 글로 정리해보세요</div>

                <div className={styles.txTBox}>
                    {" "}
                    <textarea ref={diaryRef} className={styles.diaryTxT} maxLength="200" type="text" placeholder="200자 내로 입력해주세요!" />
                </div>

                <div className={styles.button}>
                    <Button text="입력" onClick={returnList}></Button>
                </div>
            </section>
        </div>
    );
};

export default Today;
