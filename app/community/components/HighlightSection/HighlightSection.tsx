"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./HighlightSection.module.css";

// รายการรูปภาพสำหรับส่วน Highlight
const highlightImages = [
  "/images/highlight/Container.png",
  "/images/highlight/Container (1).png",
  "/images/highlight/Container (2).png",
  "/images/highlight/Container (3).png",
];

/**
 * ส่วน Highlight แสดงสไลด์รูปภาพแบบ Interactive 3D
 */
export default function HighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // ลำดับภาพปัจจุบัน
  const [isPaused, setIsPaused] = useState(false); // สถานะหยุดเล่นชั่วคราว (Auto-play pause)
  const [rotation, setRotation] = useState({ x: 0, y: 0 }); // ค่าการหมุนภาพสำหรับเอฟเฟกต์ 3D
  
  // 📸 Refs สำหรับ Scroll Reveal Animation
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // จัดการ Auto-play ทุก 5 วินาที
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  // ✨ จัดการ Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // อัปเดตสถานะการมองเห็น (เข้าหรือออก)
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // เลื่อนไปสไลด์ถัดไป
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);
  };

  // เลื่อนไปสไลด์ก่อนหน้า
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlightImages.length) % highlightImages.length);
  };

  // เลือกสไลด์ตามลำดับที่ระบุ
  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // คำนวณองศาการหมุนภาพตามตำแหน่งเมาส์ (3D Tilt Effect)
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

  // รีเซ็ตค่าการหมุนเมื่อเอาเมาส์ออก
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsPaused(false);
  };

  return (
    <section ref={containerRef} className={styles.highlightSection}>
      {/* 🔮 องค์ประกอบพื้นหลังแบบฟุ้ง (Decorative Blobs) */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.container}>
        {/* 📝 ส่วนหัวของ Section พร้อมแอนิเมชั่น "Reveal from Blur" */}
        <div className={styles.sectionHeader}>
          <span className={`${styles.subtitle} ${isVisible ? styles.artisticRevealTextActive : styles.artisticRevealText}`} style={{ transitionDelay: '0.1s' }}>
            Highlight วิทยาลัยเภสัชกรรมชุมชน
          </span>
          <h2 className={`${styles.mainTitle} ${isVisible ? styles.artisticRevealTextActive : styles.artisticRevealText}`} style={{ transitionDelay: '0.25s' }}>
            “วิทยาลัยเภสัชกรรมชุมชน: <br />
            ยกระดับการดูแลสุขภาพปฐมภูมิ”
          </h2>
          <p className={`${styles.description} ${isVisible ? styles.artisticRevealTextActive : styles.artisticRevealText}`} style={{ transitionDelay: '0.4s' }}>
            เรามุ่งมั่นพัฒนา ‘ร้านยาชุมชน’ ให้เป็นศูนย์กลางสุขภาพที่เข้าถึงง่าย <br />
            ให้คำปรึกษาและส่งมอบยาอย่างถูกต้อง แม่นยำ และใส่ใจ
          </p>
        </div>

        {/* 🖼️ ส่วนสไลเดอร์คอนเทนเนอร์พร้อมแอนิเมชั่น "Perspective Reveal" */}
        <div 
          className={`${styles.sliderContainer} ${isVisible ? styles.artisticReveal3DActive : styles.artisticReveal3D}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.sliderWrapper}>
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
              <BsChevronLeft />
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
              <BsChevronRight />
            </button>

            <div className={styles.slidesTrack}>
              {highlightImages.map((img, idx) => {
                let positionClass = styles.nextSlide;
                const isActive = idx === currentIndex;

                if (isActive) positionClass = styles.activeSlide;
                else if (idx === (currentIndex - 1 + highlightImages.length) % highlightImages.length) positionClass = styles.lastSlide;

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
                      <Image src={img} alt={`Highlight ${idx + 1}`} fill className={styles.image} />
                      {isActive && <div className={styles.glassEffect}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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
