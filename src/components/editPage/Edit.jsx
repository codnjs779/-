import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../btn/Button";
import styles from "../todayDiary/Today.module.css";
import Header from "../header/Header";
import pen from "../../images/pen.png";

const Edit = ({ userPick, setEdit, userDataController }) => {
    console.log(userPick && userPick);
    const { emoji, diary, date } = userPick && userPick;
    const nextNav = useNavigate();

    const diaryRef = useRef();

    const [pickEmotion, setPickEmotion] = useState();
    console.log(`pick`, pickEmotion);
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
    // this!!!!
    // const diary = diaryRef.current.value;
    const changeDiary = (event) => {
        // console.log(`ee`, event.currentTarget.value);
        // userDataController({ ...userPick, [event.currentTarget.name]: event.currentTarget.value });
    };
    const returnList = () => {
        nextNav("/writelist");
        setEdit(false);
        let newObj = { ...userPick };
        if (pickEmotion === undefined) {
            return;
        }
        newObj.emoji = pickEmotion;
        // newObj.diary = changeDiary();
        userDataController(newObj);
    };

    const emotion = emotionIcon.map((emoji) => {
        return <input onClick={(value) => emojiPick(value)} type="button" value={emoji.emotion} key={emoji.id} />;
    });

    return (
        <div>
            <section>
                <div className={styles.todayBox}>
                    <div className={styles.titleBar}>
                        <Header title={date} />
                    </div>
                    <section className={styles.emtion}>
                        <div className={styles.question}>
                            오늘의 <strong>000님</strong>은?
                        </div>

                        {pickEmotion !== emoji ? <div>{pickEmotion}</div> : ""}
                        {pickEmotion === undefined ? <div>{emoji}</div> : ""}

                        <ul className={styles.emtionBar}>{emotion}</ul>
                    </section>

                    <section className={styles.diary}>
                        <img className={styles.pen} src={pen} alt="pen" />
                        <div className={styles.diaryHeader}>하루를 짧은 글로 정리해보세요</div>

                        <div className={styles.txTBox}>
                            {" "}
                            <textarea ref={diaryRef} value={diary} onChange={changeDiary} name="diary" className={styles.diaryTxT} maxLength="200" type="text" />
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <Button text="수정" onClick={returnList}></Button>
                <Button text="삭제"></Button>
            </section>
        </div>
    );
};

export default Edit;
