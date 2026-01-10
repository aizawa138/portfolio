import styles from "./Card.module.css";
import React, {useState} from "react";
import fishImage from "../../assets/images/IMG_1099.jpg";

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    const detailDisplay = (
        <div className={styles.overlay} onClick={() => setIsClicked(false)}>
            <div className={styles.detail} onClick={(e) => e.stopPropagation()}>
                <h2>Project 1</h2>
                <h3>Description</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam voluptatum inventore laudantium sunt eaque blanditiis sed quos? Quia quo animi eius asperiores quae quas aperiam blanditiis, earum ipsam dignissimos.</p>
                <h3>Tech stacks</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum obcaecati minima quaerat quia quis eos totam at repellendus veritatis. Repellat eius fugit eligendi eveniet suscipit totam nulla soluta aliquam eum?</p>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.card} onClick={() => setIsClicked(true)}>
                <div className={styles.cardTextContainer}>
                    <h1 className={styles.projectName}>Project 1</h1>
                </div>
            </div>

            {isClicked && detailDisplay}
        </>
    );

}

export default Card