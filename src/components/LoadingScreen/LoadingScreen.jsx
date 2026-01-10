import styles from "./LoadingScreen.module.css";
import penguin from "../../assets/images/2727376.svg";
import React, {useState, useEffect} from "react";

function Loading() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 3) return 0;
                return prev + 1
            })
        }, 500);

        return () => clearInterval(timer);

    }, [])

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingImage}>
                <img src={penguin} alt="penguin" className={count >= 1 ? styles.penguinImageShow : styles.penguinImageHide} />
                <img src={penguin} alt="penguin" className={count >= 2 ? styles.penguinImageShow : styles.penguinImageHide} />
                <img src={penguin} alt="penguin" className={count >= 3 ? styles.penguinImageShow : styles.penguinImageHide} />
            </div>
            <p className={styles.loadingText}>Loading...</p>
        </div>
    )

}

export default Loading