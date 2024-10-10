import React from 'react';
import styles from './sensei-contact.module.css';
/**
 * @function SenseiContact
 * @description A functional component that renders the contact me section
 * @returns {JSX.Element} The JSX Element for the contact me section
 * @example
 * <SenseiContact />
 */
const SenseiContact = (): JSX.Element => {
    return (
        <section className={styles['Contact-Me-section']} id="Contact">
            <div className={styles['header-section']}>
                <h2 className={styles.title}>
                    {/* A title with a Japanese and English string */}
                    <span lang="ja">連絡先 •</span>
                    <span lang="en"> Contact Me</span>
                </h2>
                <footer className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles['contact-me']}>
                            <div className={styles['info-me']}>
                                {/* A link to my email */}
                                <a
                                    className={styles['link-me']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mostafa Sensei106.Mail
                                </a>
                                {/* A list of social network links */}
                                <div className={styles.social}>
                                    <p className={styles.meon}>Me on Social Network</p>
                                    <a
                                        aria-label="Go to Facebook"
                                        href="mailto:mostafa438886@fci.bu.edu.eg?subject=こんにちは、 MR: Mostafa Sensei"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* Facebook icon */}
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Instagram"
                                        href="https://www.instagram.com/mostafa_sensei106/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* Instagram icon */}
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Linkedin"
                                        href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/?originalSubdomain=eg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* LinkedIn icon */}
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Telegram"
                                        href="https://t.me/Mostafa_Sensei106"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* Telegram icon */}
                                        <i className="fa-brands fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Copyright footer */}
                        <div className={styles.copyright}>
                            &copy; {new Date().getFullYear()}{' '}
                            <span>
                                <a
                                    className={styles.Sensei_Name}
                                    href="https://github.com/MostafaSensei106"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* My name */}
                                    Mostafa Mahmoud
                                </a>
                            </span>{' '}
                            ALL Copyright Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default SenseiContact;