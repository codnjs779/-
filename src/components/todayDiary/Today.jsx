import React from "react";
import Header from "../header/Header";
import styles from "./Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useNavigate } from "react-router-dom";
const Today = () => {
    const nextNav = useNavigate();
    const emotionIcon = [
        { id: 1, emotion: "😁" },
        { id: 2, emotion: "😥" },
        { id: 3, emotion: "😱" },
        { id: 4, emotion: "🥰" },
        { id: 5, emotion: "😨" },
    ];
    const returnList = () => {
        nextNav("/writelist");
    };
    const selectedEmoji = (e) => {
        console.log(e);
    };
    const emotion = emotionIcon.map((emoji) => {
        return (
            <li onClick={(e) => selectedEmoji(emoji.emotion)} key={emoji.id}>
                {emoji.emotion}
            </li>
        );
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

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>

            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>하루를 짧은 글로 정리해보세요</div>
                <input className={styles.diaryInput} type="text" placeholder="100자 내로 입력해주세요!" />
                <div className={styles.button}>
                    <Button text="입력" onClick={returnList}></Button>
                </div>
            </section>
        </div>
    );
};

export default Today;
