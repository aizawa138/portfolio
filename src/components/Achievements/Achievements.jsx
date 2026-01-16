import styles from "./Achievements.module.css";
import Card from "../Card/Card";
import { CARD_DATA } from "../../data/data.js";

function Achievements() {

    return (
        <div className={styles.achievementsBody}>
            <div className={styles.achievementsContainer}>
                <p>Projects</p>
            </div>
            <div className={styles.cardList}>
                {CARD_DATA.map((info, index) => {
                    return <Card key={index} image={info.image} title={info.title} text={info.text}></Card>
                })}
            </div>
                <button className={styles.arrowButtonLeft}>&lt;</button>
                <button className={styles.arrowButtonRight}>&gt;</button>
        </div>
    );

}

export default Achievements