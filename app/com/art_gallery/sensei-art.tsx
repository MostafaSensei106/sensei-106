"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, {useState, useEffect, Dispatch, SetStateAction, useMemo, useCallback} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import styles from "./sensei-art.module.css";
import Image from "next/image";

type ImageItemProps = {
    image: {
        src: string;
        thumb: string;
    };
    index: number;
    setOpen: Dispatch<SetStateAction<number>>;
};

const ImageItem: React.FC<ImageItemProps> = ({image, index, setOpen}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={styles.art_pic}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            <Image
                src={image.thumb}
                alt={`Art piece ${index + 1}`}
                width={300}
                height={300}
                onClick={() => setOpen(index)}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.thumb}
            />
        </motion.div>
    );
};

function SenseiArt() {
    const [index, setIndex] = useState(-1);
    const open = index >= 0;
    const images = useMemo(() => [



        // {
        //     src: "/Assets/art-gallery/Images/image_display/Free_Palestine_Sensei_Art.png",
        //     thumb: "/Assets/art-gallery/Images/web/Free_Palestine_Sensei_Art.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Sensei_106_Spy.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Sensei_106_Spy.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Ice_Coffee_Team_Logo.png",
        //     thumb: "/Assets/art-gallery/Images/web/Ice_Coffee_Team_Logo.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Tadamon_App_Logo.png",
        //     thumb: "/Assets/art-gallery/Images/web/Tadamon_App_Logo.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Mostafa_Logo.png",
        //     thumb: "/Assets/art-gallery/Images/web/Mostafa_Logo.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Japan_Coffee_Logo.png",
        //     thumb: "/Assets/art-gallery/Images/web/Japan_Coffee_Logo.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Japanese_Girl.png",
        //     thumb: "/Assets/art-gallery/Images/web/Japanese_Girl.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/DS_14.png",
        //     thumb: "/Assets/art-gallery/Images/web/DS_14.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/BVSarada.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/B2BV_Sarada.webp"
        // },
        //
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/B2BVBA.png",
        //     thumb: "/Assets/art-gallery/Images/web/B2BVBA.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/B2BVKW.png",
        //     thumb: "/Assets/art-gallery/Images/web/B2BVKW.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/B2BVH.png",
        //     thumb: "/Assets/art-gallery/Images/web/B2BVH.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/DS_106.png",
        //     thumb: "/Assets/art-gallery/Images/web/DS_106.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Night_Light.png",
        //     thumb: "/Assets/art-gallery/Images/web/Night_Light.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Red_Night.png",
        //     thumb: "/Assets/art-gallery/Images/web/Red_Night.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Sensei_Art44.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Sensei_Art44.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/DS_2_BackGround.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/DS_2_BackGround.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Naruto_Style.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Naruto_Style.webp"
        // },
        //
        // {
        //     src : "/Assets/art-gallery/Images/image_display/JJK_Fight_1.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/JJK_Fight_1.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/JJK_Sensei.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/JJK_Sensei.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/BNGKW.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/BNGKW.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Night14.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Night14.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/CHM_Makima.png",
        //     thumb: "/Assets/art-gallery/Images/web/CHM_Makima.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/BNG1.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/BNG1.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/DS_1.png",
        //     thumb: "/Assets/art-gallery/Images/web/DS_1.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Pizza_Girl.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Pizza_Girl.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/HG_Logo.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/HG_Logo.webp"
        // },
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Sakura.jpg",
        //     thumb: "/Assets/art-gallery/Images/web/Sakura.webp"
        // },

        {
            src: "Assets/art-gallery/Images/image_display/Free_Palestine_Sensei_Art.png",
            thumb: "Assets/art-gallery/Images/web/Free_Palestine_Sensei_Art.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Sensei_106_Spy.jpg",
            thumb: "Assets/art-gallery/Images/web/Sensei_106_Spy.webp"        },

        {
            src: "Assets/art-gallery/Images/image_display/Ice_Coffee_Team_Logo.png",
            thumb: "Assets/art-gallery/Images/web/Ice_Coffee_Team_Logo.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Tadamon_App_Logo.png",
            thumb: "Assets/art-gallery/Images/web/Tadamon_App_Logo.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Mostafa_Logo.png",
            thumb: "Assets/art-gallery/Images/web/Mostafa_Logo.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Japan_Coffee_Logo.png",
            thumb: "Assets/art-gallery/Images/web/Japan_Coffee_Logo.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Japanese_Girl.jpg",
            thumb: "Assets/art-gallery/Images/web/Japanese_Girl.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/DS_14.png",
            thumb: "Assets/art-gallery/Images/web/DS_14.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/BVSarada.jpg",
            thumb: "Assets/art-gallery/Images/web/B2BV_Sarada.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/B2BVBA.png",
            thumb: "Assets/art-gallery/Images/web/B2BVBA.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/B2BVKW.png",
            thumb: "Assets/art-gallery/Images/web/B2BVKW.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/B2BVH.png",
            thumb: "Assets/art-gallery/Images/web/B2BVH.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/DS_106.png",
            thumb: "Assets/art-gallery/Images/web/DS_106.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Night_Light.png",
            thumb: "Assets/art-gallery/Images/web/Night_Light.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Red_Night.jpg",
            thumb: "Assets/art-gallery/Images/web/Red_Night.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Sensei_Art44.jpg",
            thumb: "Assets/art-gallery/Images/web/Sensei_Art44.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/DS_2_BackGround.jpg",
            thumb: "Assets/art-gallery/Images/web/DS_2_BackGround.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Naruto_Style.jpg",
            thumb: "Assets/art-gallery/Images/web/Naruto_Style.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/JJK_Fight_1.jpg",
            thumb: "Assets/art-gallery/Images/web/JJK_Fight_1.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/JJK_Sensei.jpg",
            thumb: "Assets/art-gallery/Images/web/JJK_Sensei.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/BNGKW.jpg",
            thumb: "Assets/art-gallery/Images/web/BNGKW.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Night14.jpg",
            thumb: "Assets/art-gallery/Images/web/Night14.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/CHM_Makima.jpg",
            thumb: "Assets/art-gallery/Images/web/CHM_Makima.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/BNG1.jpg",
            thumb: "Assets/art-gallery/Images/web/BNG1.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/DS_1.jpg",
            thumb: "Assets/art-gallery/Images/web/DS_1.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Pizza_Girl.jpg",
            thumb: "Assets/art-gallery/Images/web/Pizza_Girl.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/HG_Logo.jpg",
            thumb: "Assets/art-gallery/Images/web/HG_Logo.webp"
        },

        {
            src: "Assets/art-gallery/Images/image_display/Sakura.jpg",
            thumb: "Assets/art-gallery/Images/web/Sakura.webp"
        },


    ], []);


    const slides = useMemo(() => images.map(image => ({src: image.src})), [images]);

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowRight':
                setIndex((i) => (i + 1) % slides.length);
                break;
            case 'ArrowLeft':
                setIndex((i) => (i - 1 + slides.length) % slides.length);
                break;
        }
    }, [slides.length]);

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]); // Include handleKeyDown in dependencies

    return (
        <section className={styles["art-gallery-section"]} id="Gallery">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles["header-section"]}
                    initial={{opacity: 0, y: -50}}
                    animate={headerInView ? {opacity: 1, y: 0} : {opacity: 0, y: -50}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                >
                    <h2 className={styles.title}>
                        <span lang="ja">画廊 •</span>
                        <span lang="en"> Art Gallery</span>
                    </h2>
                </motion.div>
                <div className={styles["art-gallery-content"]}>
                    <div className={styles.Gallery}>
                        {images.map((image, i) => (
                            <ImageItem
                                key={i}
                                image={image}
                                index={i}
                                setOpen={setIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Lightbox
                slides={slides}
                open={open}
                index={index}
                close={() => setIndex(-1)}
            />
        </section>
    );
}

export default SenseiArt;
