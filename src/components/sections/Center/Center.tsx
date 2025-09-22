"use client";

import * as motion from "framer-motion/client";
import Image from "next/image";
import styles from "./Center.module.css";
import { useState, useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://modo-phinf.pstatic.net/20230126_198/1674699238131jfKiY_PNG/mosa7Bk9Cx.png?type=f353_353",
    alt: "상담실 입구",
    title: "상담실 입구",
  },
  {
    src: "https://modo-phinf.pstatic.net/20230126_36/1674699239372J142M_PNG/mosaXOw3lU.png?type=f353_353",
    alt: "상담실 내부",
    title: "상담실 내부",
  },
  {
    src: "https://modo-phinf.pstatic.net/20230126_280/16746992422848hMvn_PNG/mosaHY6h2k.png?type=f353_353",
    alt: "상담실 공간",
    title: "상담실 공간",
  },
  {
    src: "https://modo-phinf.pstatic.net/20230126_280/16746992422848hMvn_PNG/mosaHY6h2k.png?type=f353_353",
    alt: "상담실 공간",
    title: "상담실 공간2",
  },
  {
    src: "https://modo-phinf.pstatic.net/20230126_280/16746992422848hMvn_PNG/mosaHY6h2k.png?type=f353_353",
    alt: "상담실 공간",
    title: "상담실 공간3",
  },
];

const Center = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      className={styles.center}
      id="center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>쉼터 소개</h2>
          <p className={styles.subtitle}>편안한 분위기에서 마음의 휴식을 찾으세요</p>
        </motion.div>

        <motion.div
          className={styles.galleryWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.galleryContainer}>
            <motion.div
              className={styles.gallerySlide}
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              animate={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(calc(-${currentIndex} * (33.333% + 2rem)))`,
              }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={styles.galleryImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.imageTitle}>{image.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className={styles.controlsContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className={`${styles.controlButton} ${currentIndex === 0 ? styles.disabled : ""}`}
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentIndex === 0}
            >
              ←
            </motion.button>
            <motion.button
              className={`${styles.controlButton} ${
                currentIndex === (isMobile ? galleryImages.length - 1 : galleryImages.length - 3) ? styles.disabled : ""
              }`}
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentIndex === (isMobile ? galleryImages.length - 1 : galleryImages.length - 3)}
            >
              →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Center;
