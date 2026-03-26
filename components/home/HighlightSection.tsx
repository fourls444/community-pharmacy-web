"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./HighlightSection.module.css";

const highlightImages = [
  "/images/highlight/Container.png",
  "/images/highlight/Container (1).png",
  "/images/highlight/Container (2).png",
  "/images/highlight/Container (3).png",
];

export default function HighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlightImages.length) % highlightImages.length);
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsPaused(false);
  };

  return (
    <section className={styles.highlightSection}>
      {/* Decorative Blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Highlight วิทยาลัยเภสัชกรรมชุมชน</span>
          <h2 className={styles.mainTitle}>
            “วิทยาลัยเภสัชกรรมชุมชน: <br />
            ยกระดับการดูแลสุขภาพปฐมภูมิ”
          </h2>
          <p className={styles.description}>
            เรามุ่งมั่นพัฒนา ‘ร้านยาชุมชน’ ให้เป็นศูนย์กลางสุขภาพที่เข้าถึงง่าย <br />
            ให้คำปรึกษาและส่งมอบยาอย่างถูกต้อง แม่นยำ และใส่ใจ
          </p>
        </div>

        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.sliderWrapper}>
            {/* Navigation Arrows */}
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
              <BsChevronLeft />
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
              <BsChevronRight />
            </button>

            {/* Slides */}
            <div className={styles.slidesTrack}>
              {highlightImages.map((img, idx) => {
                let positionClass = styles.nextSlide;
                const isActive = idx === currentIndex;

                if (isActive) {
                  positionClass = styles.activeSlide;
                } else if (
                  idx === (currentIndex - 1 + highlightImages.length) % highlightImages.length
                ) {
                  positionClass = styles.lastSlide;
                }

                return (
                  <div 
                    key={idx} 
                    className={`${styles.slide} ${positionClass}`}
                    onMouseMove={isActive ? handleMouseMove : undefined}
                    style={isActive ? {
                      transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1)`,
                    } : undefined}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={img}
                        alt={`Highlight ${idx + 1}`}
                        fill
                        className={styles.image}
                      />
                      {isActive && <div className={styles.glassEffect}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {highlightImages.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ""}`}
                onClick={() => setSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
