import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top Banner (Green) */}
      <div className={styles.topBanner}>
        <div className={styles.brandArea}>
          <img
            src="/images/icon.png"
            alt="Pharmacy Council Logo"
            className={styles.logo}
          />
          <div>
            <h1 className={styles.brandTitle}>
              วิทยาลัยเภสัชกรรมชุมชน
            </h1>
            <p className={styles.brandSubtitle}>
              THE COMMUNITY PHARMACY COLLEGE OF THAILAND
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}