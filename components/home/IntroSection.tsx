"use client";

import styles from "./IntroSection.module.css";

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

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>ปีแห่งประสบการณ์</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>สมาชิกวิทยาลัย</span>
          </div>
        </div>
      </div>
    </section>
  );
}
