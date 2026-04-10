"use client";

import styles from "./AboutSection.module.css";
import { FaSearch } from "react-icons/fa";
import { LuListFilter, LuChevronDown } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/home/Container.png"
            alt="Pharmacy Practice"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.overlayTitle}>วิทยาลัยเภสัชกรรมชุมชน</h3>
            <p className={styles.overlaySubtitle}>
              The College of Community Pharmacy: (CCP)
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Text & Search */}
      <div className={styles.contentSection}>
        <h2 className={styles.headline}>
          ยกระดับวิชาชีพเภสัชกรรมชุมชน เพื่อระบบสุขภาพไทยที่ยั่งยืน
          
        </h2>
        <p className={styles.description}>
         วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.) 
         ทำหน้าที่เป็นองค์กรวิชาการกลางในการพัฒนาองค์ความรู้ 
         ความเชี่ยวชาญ และมาตรฐานการให้บริการเภสัชกรรมระดับปฐมภูมิ 
         เพื่อเสริมสร้างระบบบริการสุขภาพที่มีคุณภาพและได้มาตรฐาน
        </p>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

          <div className={styles.inputGroup}>
            <div className={styles.dropdown}>
              <LuListFilter className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>
            
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="ค้นหาเลขที่ใบอนุญาต"
                className={styles.searchInput}
              />
            </div>

            <button className={styles.searchButton}>ค้นหา</button>
          </div>
        </div>
      </div>
    </section>
  );
}