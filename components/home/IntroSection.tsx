"use client";

import { LuChevronDown, LuListFilter } from "react-icons/lu";
import styles from "./IntroSection.module.css";
import { FaSearch } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/img.png"
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

      {/* Right Column: Text Content Only */}
      <div className={styles.contentSection}>
        <h2 className={styles.headline}>
          ยกระดับวิชาชีพเภสัชกรรมชุมชน <br />
          เพื่อระบบสุขภาพไทยที่ยั่งยืน
        </h2>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.) <br />
          ทำหน้าที่เป็นองค์กรวิชาการกลางในการพัฒนาองค์ความรู้ ความเชี่ยวชาญ <br />
          และมาตรฐานการให้บริการเภสัชกรรมระดับปฐมภูมิ <br />
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
