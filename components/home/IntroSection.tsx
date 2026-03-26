"use client";

import { LuChevronDown, LuListFilter } from "react-icons/lu";
import styles from "./IntroSection.module.css";
import { FaSearch } from "react-icons/fa";

/**
 * ส่วนแนะนำ (Intro Section) แสดงภาพไฮไลท์ ข้อมูลเบื้องต้น และส่วนค้นหาผู้เชี่ยวชาญ
 */
export default function IntroSection() {
  return (
    <section className={styles.container}>
      {/* คอลัมน์ซ้าย: แสดงรูปภาพพร้อมชื่อวิทยาลัยแบบ Overlay */}
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

      {/* คอลัมน์ขวา: แสดงเนื้อหาข้อความและส่วนค้นหา */}
      <div className={styles.contentSection}>
        {/* หัวข้อหลัก */}
        <h2 className={styles.headline}>
          ยกระดับวิชาชีพเภสัชกรรมชุมชน <br />
          เพื่อระบบสุขภาพไทยที่ยั่งยืน
        </h2>
        <div className={styles.divider}></div>
        {/* รายละเอียดคำอธิบายเกี่ยวกับวภช. */}
        <p className={styles.description}>
          วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.) <br />
          ทำหน้าที่เป็นองค์กรวิชาการกลางในการพัฒนาองค์ความรู้ ความเชี่ยวชาญ <br />
          และมาตรฐานการให้บริการเภสัชกรรมระดับปฐมภูมิ <br />
          เพื่อเสริมสร้างระบบบริการสุขภาพที่มีคุณภาพและได้มาตรฐาน
        </p>

        {/* ส่วนการค้นหา (Search Card) */}
        <div className={styles.searchCard}>
          <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

          <div className={styles.inputGroup}>
            {/* ตัวเลือกประเภทการค้นหา (Filter Dropdown) */}
            <div className={styles.dropdown}>
              <LuListFilter className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>

            {/* ช่องกรอกคำค้นหา (Search Input) */}
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="ค้นหาเลขที่ใบอนุญาต"
                className={styles.searchInput}
              />
            </div>

            {/* ปุ่มกดเพื่อเริ่มการค้นหา */}
            <button className={styles.searchButton}>ค้นหา</button>
          </div>
        </div>
      </div>
    </section>
  );
}
