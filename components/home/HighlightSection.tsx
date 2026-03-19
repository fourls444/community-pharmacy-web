"use client";

import { useState } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlightImages.length) % highlightImages.length);
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.highlightSection}>
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

        <div className={styles.sliderContainer}>
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
                let position = "nextSlide";
                if (idx === currentIndex) {
                  position = "activeSlide";
                } else if (
                  idx === (currentIndex - 1 + highlightImages.length) % highlightImages.length
                ) {
                  position = "lastSlide";
                }

                return (
                  <div key={idx} className={`${styles.slide} ${styles[position]}`}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={img}
                        alt={`Highlight ${idx + 1}`}
                        fill
                        className={styles.image}
                      />
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
