import styles from "./Header.module.css";

/**
 * ส่วนหัวของหน้าเว็บ (Secondary Header)
 * แสดงชื่อวิทยาลัยและโลโก้ในรูปแบบแถบบาร์
 */
export default function Header() {
  return (
    <header className={styles.header}>
      {/* แถบด้านบน (ส่วนใหญ่ใช้สีเขียวตามธีม) */}
      <div className={styles.topBanner}>
        <div className={styles.brandArea}>
          {/* โลโก้ขนาดเล็กใน Header */}
          <img
            src="/images/icon.png"
            alt="Pharmacy Council Logo"
            className={styles.logo}
          />
          {/* กลุ่มชื่อวิทยาลัย */}
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