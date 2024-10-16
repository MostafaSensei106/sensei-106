"use client";
import React, { useState, useEffect } from 'react';
import styles from './sensei-header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUserSecret,
    faBook,
    faFolder,
    faPalette
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


//**
// @Author Mostafa Sensei106
// @Description A responsive header component with a menu that highlights the active section of the page.
//**

/**
 * The main header component with a responsive menu.
 * @returns The JSX Element for the header.
 */
const SenseiHeader = (): JSX.Element => {
    /**
     * The state of the menu, whether it is open or closed.
     */
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    /**
     * The state of the active section, which is the section that is currently in view.
     */
    const [activeSection, setActiveSection] = useState<string>('Home');

    /**
     * Toggle the menu.
     */
    const toggleMenu = (): void => {
        setIsMenuOpen((prevState) => !prevState);
    };

    /**
     * Handle the scroll event to determine the active section based on scroll position.
     */
    const handleScroll = (): void => {
        const sections: Array<string> = ['Home', 'Service', 'Knowledge', 'Projects', 'Gallery'];
        const current: string | undefined = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });
        if (current) {
            setActiveSection(current);
            localStorage.setItem('activeSection', current);
        }
    };

    useEffect(() => {
        const savedSection = localStorage.getItem('activeSection');
        if (savedSection) {
            setActiveSection(savedSection);
            const element = document.getElementById(savedSection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            // Close the menu if the window is resized beyond the defined width
            if (window.innerWidth > 994 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    // Mapping section names to their respective FontAwesome icons
    const sectionIcons: Record<string, IconProp> = {
        Home: faHome,
        Service: faUserSecret,
        Knowledge: faBook,
        Projects: faFolder,
        Gallery: faPalette,
    };

    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>
                <span lang="en">Mostafa •</span>
                <span lang="ja"> モスタファ</span>
            </a>
            <div
                className={`${styles.MenuIcon} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
                tabIndex={0}
                role="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
                {Object.entries(sectionIcons).map(([section, icon]) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={activeSection === section ? styles.active : ''}
                        onClick={() => {
                            setActiveSection(section);
                            localStorage.setItem('activeSection', section);
                            // Close menu if in mobile view
                            if (window.innerWidth <= 994) setIsMenuOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={icon} className={styles.icon} />
                        <span>{section}</span>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default SenseiHeader;
