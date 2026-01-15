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
        </div>
    );

}

export default Achievements