import styles from "./Card.module.css";
import React, { useState, useEffect } from "react";
import fishImage from "../../assets/images/IMG_1099.jpg";
import { createPortal } from "react-dom";

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "unset";
        }
        return () => document.body.style.overflowY = "unset";
    }, [isClicked]);

    const detailDisplay = (
        <div className={styles.overlay} onClick={() => setIsClicked(false)}>
            <div className={styles.detail} onClick={(e) => e.stopPropagation()}>
                <div className={styles.detailContent}>
                    <h2>{props.title}</h2><br />
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam voluptatum inventore laudantium sunt eaque blanditiis sed quos? Quia quo animi eius asperiores quae quas aperiam blanditiis, earum ipsam dignissimos.</p><br />
                    <h3>Tech stacks</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum obcaecati minima quaerat quia quis eos totam at repellendus veritatis. Repellat eius fugit eligendi eveniet suscipit totam nulla soluta aliquam eum?</p><br />
                    <h3>Directory Structure</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum obcaecati minima quaerat quia quis eos totam at repellendus veritatis. Repellat eius fugit eligendi eveniet suscipit totam nulla soluta aliquam eum?</p><br />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.card} onClick={() => setIsClicked(true)}>
                <img src={props.image} alt="project-image" className={styles.cardImage} />
                <div className={styles.cardTextContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>

            {isClicked && createPortal(detailDisplay, document.body)}
        </>
    );

}

export default Card