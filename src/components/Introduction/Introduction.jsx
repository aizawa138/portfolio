import styles from "./Introduction.module.css";

function Introduction() {

    return (
        <div className={styles.introductionSection}>
            <p className={styles.aboutMe}>About me</p>
            <p className={styles.introductionText1}>
                I'm Daigo Kitagawa, a student at University of Canterbury majoring in Computer Science.
            </p>
            <p className={styles.introductionText2}>
                I am originally from Okazaki, a country-side city in Japan. I have lived in the US for 5 years when I was young, but after that, I have lived in Okazaki until I was 17.
            </p>
            <p className={styles.introductionText3}>
                Since then, I have been studying in New Zealand and have gained interest in coding through classes that I took in New Zealand. Projects which I have created are listed down below:
            </p>
        </div>
    );

}

export default Introduction