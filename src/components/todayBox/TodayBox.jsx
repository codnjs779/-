import React, { memo } from "react";
import styles from "./TodayBox.module.css";
import pen from "../../images/pen.png";
import MiniBox from "../miniBox/MiniBox";
import { useNavigate } from "react-router-dom";

const TodayBox = memo(({ userDiary }) => {
    console.log("userDiary", userDiary);

    const nextNav = useNavigate();
    const todayPage = () => {
        nextNav("/today");
    };

    return (
        <>
            <div className={styles.WriteListBox}>
                <div className={styles.miniboxSet}>
                    {Object.keys(userDiary).map((key) => (
                        <MiniBox key={key} user={userDiary[key]} />
                    ))}
                </div>

                <div className={styles.penBox} onClick={todayPage}>
                    <img src={pen} alt="pen" />
                </div>
            </div>
        </>
    );
});

export default TodayBox;
// useEffect(() => {
//     // if (userDiary === "") {
//     //     setLoading(false);
//     //     return;
//     // }
//     // if (userDiary !== "") {
//     //     setLoading(true);
//     //     if (miniBox.length !== 0) {
//     //         setLoading(false);
//     //     } else {
//     //         return;
//     //     }
//     // }
// }, [miniBox]);  {loading && (
//     <>
//         <div className={styles.load}></div>
//         <div className={styles.loadMsg}>로딩중입니다!</div>
//     </>
// )}
