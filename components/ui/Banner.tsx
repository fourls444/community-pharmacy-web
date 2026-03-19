"use client";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <img
          src="/images/icon.png"
          alt="Logo"
          className={styles.logo}
        />
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
