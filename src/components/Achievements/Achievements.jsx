import styles from "./Achievements.module.css";
import Card from "../Card/Card";

function Achievements() {

    return (
        <div className={styles.achievementsBody}>
            <div className={styles.achievementsContainer}>
                <p>Projects</p>
            </div>
            <div className={styles.cardList}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );

}

export default Achievements