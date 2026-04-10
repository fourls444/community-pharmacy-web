import styles from "./BannerSection.module.css";

export default function BannerSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src="/images/favicon.png" alt="Royal College Logo" className={styles.logo} />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>วิทยาลัยเภสัชกรรมชุมชน</h1>
                    <h2 className={styles.titleEn}>College of Community Pharmary (CCP)</h2>
                </div>
            </div>
        </section>
    );
}
