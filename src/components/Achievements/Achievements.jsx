import styles from "./Achievements.module.css";
import Card from "../Card/Card";
import { CARD_DATA } from "../../data/data.js";
import React, { useEffect, useState } from "react";

function Achievements() {

    const [slide, setSlide] = useState(1); 
    const [isTransitioning, setIsTransitioning] = useState(true);

    const cardWidth = 40;
    const gap = 3.25;
    const initialPosition = -14;
    const offset = initialPosition + (-slide * (cardWidth + gap));


    const extendedCards = [
        CARD_DATA[CARD_DATA.length - 2],
        CARD_DATA[CARD_DATA.length - 1],
        ...CARD_DATA,
        CARD_DATA[0], 
        CARD_DATA[1], 
        CARD_DATA[2]
    ];

    function handleArrowRight() {
        setIsTransitioning(true);
        setSlide(prev => prev + 1);
    }

    function handleArrowLeft() {
        setIsTransitioning(true);
        setSlide(prev => prev - 1);
    }

    useEffect(() => {
        if (slide === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setSlide(CARD_DATA.length);
            }, 300); 
        } else if (slide === CARD_DATA.length + 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setSlide(1);
            }, 300);
        }
    }, [slide]);

    return (
        <div className={styles.achievementsBody}>
            <div className={styles.achievementsContainer}>
                <p>Projects</p>
            </div>
            <div className={styles.cardList} style={{
                    transform: `translateX(${offset}vw)`,
                    transition: isTransitioning ? "transform 0.3s ease" : "none"
                }}>
                {extendedCards.map((info, index) => {
                    return <Card key={index} image={info.image} title={info.title} text={info.text}></Card>
                })}
            </div>
            <button className={styles.arrowButtonLeft} onClick={handleArrowLeft}>&lt;</button>
            <button className={styles.arrowButtonRight} onClick={handleArrowRight}>&gt;</button>
        </div>
    );

}

export default Achievements