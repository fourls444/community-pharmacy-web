"use client";

import styles from "./Banner.module.css";

/**
 * ส่วนแบนเนอร์หลักของหน้าเว็บ (Hero Banner)
 * แสดงโลโก้และชื่อวิทยาลัย
 */
export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        {/* โลโก้วิทยาลัย */}
        <img
          src="/images/icon.png"
          alt="Logo"
          className={styles.logo}
        />
        {/* กลุ่มข้อความชื่อวิทยาลัยทั้งไทยและอังกฤษ */}
        <div className={styles.textGroup}>
          <h1 className={styles.title}>
            วิทยาลัยเภสัชกรรมชุมชน
          </h1>
          <p className={styles.subtitle}>
            The Community Pharmacy College of Thailand
          </p>
        </div>
      </div>
    </section>
  );
}
