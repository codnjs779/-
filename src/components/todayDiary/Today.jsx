import React, { useRef } from "react";
import Header from "../header/Header";
import styles from "./Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useNavigate } from "react-router-dom";
const Today = ({ setUserDiary, userDiary }) => {
    const nextNav = useNavigate();

    const diaryRef = useRef();
    const returnList = () => {
        nextNav("/writelist");
    };
    const emotionIcon = [
        { id: 1, emotion: "😁" },
        { id: 2, emotion: "😥" },
        { id: 3, emotion: "😱" },
        { id: 4, emotion: "🥰" },
        { id: 5, emotion: "😨" },
    ];

    const emotion = emotionIcon.map((emoji) => {
        return (
            <li onClick={(e) => selectedEmoji(emoji.emotion)} key={emoji.id}>
                {emoji.emotion}
            </li>
        );
    });

    const diaryContent = () => {
        let newUserDiary = { ...userDiary };
        newUserDiary.diary = diaryRef.current.value;
        setUserDiary(newUserDiary);
    };

    const selectedEmoji = (e) => {
        let newUserDiary = { ...userDiary };
        newUserDiary.emoji = e;

        const id = new Date();
        newUserDiary.id = id;

        const date = editDate(id);

        newUserDiary.date = date;
        setUserDiary(newUserDiary);
    };

    const editDate = (id) => {
        let year = id.getFullYear();
        const yearString = year.toString();
        year = yearString.substring(0, 2);

        const month = ("0" + (id.getMonth() + 1)).slice(-2);
        const day = ("0" + id.getDate()).slice(-2);
        const date = year + "-" + month + "-" + day;
        return date;
    };
    return (
        <div className={styles.todayBox}>
            <div className={styles.titleBar}>
                <Header title="오늘의 일기" />
            </div>
            <section className={styles.emtion}>
                <div className={styles.question}>
                    오늘의 <strong>000님</strong>은?
                </div>

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>

            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>하루를 짧은 글로 정리해보세요</div>

                <div className={styles.txTBox}>
                    {" "}
                    <textarea onChange={diaryContent} ref={diaryRef} className={styles.diaryTxT} maxLength="200" type="text" placeholder="200자 내로 입력해주세요!" />
                </div>

                <div className={styles.button}>
                    <Button text="입력" onClick={returnList}></Button>
                </div>
            </section>
        </div>
    );
};

export default Today;
