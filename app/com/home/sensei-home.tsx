//SenseiHome.tsx
"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-home.module.css';


const SenseiHome = () => {
    const [typingIndex, setTypingIndex] = useState(0);
    const texts = ['Software Engineer', 'Flutter Developer', 'Back-End Developer', 'AI Developer', 'Artist'];
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTypingIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className={styles.home} id="Home">
            <motion.div
                className={styles.container}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                ref={ref}
            >
                <motion.div className={styles.homeImg} variants={itemVariants}>
                    <img
                        src="/Assets/Images/Sensei.jpg"
                        alt="Mostafa Sensei"
                        className={styles.image}
                    />
                </motion.div>
                <motion.div className={styles.homeContent} variants={itemVariants}>
                    <h1>
                        Hi, It's <span className={styles.highlight}>Mostafa Sensei</span>
                    </h1>
                    <h3 className={styles.typingText}>
                        I'm a <span className={styles.typingHighlight} data-text={texts[typingIndex]}>{texts[typingIndex]}</span>
                    </h3>
                    <p>
                        I'm a college student specializing in Python and Flutter, focusing on stable and secure app development. I have experience in Python-based computer vision projects and improving mobile experiences through Flutter development.
                    </p>
                    <motion.div className={styles.socialIcon} variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/MostafaSensei106" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://t.me/Mostafa_Sensie106" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </motion.div>
                    <motion.div className={styles.homeButton} variants={itemVariants}>
                        <a href="#" className={`${styles.btn} ${styles.btn1}`}>
                            Hire Me <FontAwesomeIcon icon={faUserSecret} />
                        </a>
                        <a href="#" className={`${styles.btn} ${styles.btn2}`}>
                            Download CV <FontAwesomeIcon icon={faFilePdf} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SenseiHome;