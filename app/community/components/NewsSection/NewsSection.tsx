import styles from "./NewsSection.module.css";

const NEWS_ITEMS = [
    {
        image: "/images/news/Container1.png",
        title: "วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ จัดประชุมวิชาการเรื่อง บทบาทเภสัชกรในการคุ้มครองผู้บริโภคด้านยาและเอกลักษณ์สุขภาพ",
        description:
            "หลักสูตรการฝึกอบรมระยะสั้น ที่มีระยะเวลาการฝึกอบรม 20 สัปดาห์ขึ้นไป",
    },
    {
        image: "/images/news/Container2.png",
        title: "วภพ. เปิดรับสมัคร: หลักสูตรการตลาดผลิตภัณฑ์สมุนไพร ปี 72",
        description:
            "อบรม 12 สัปดาห์: การให้คำปรึกษาด้านการใช้กัญชาทางการแพทย์",
    },
    {
        image: "/images/news/Container3.png",
        title: "วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ ประกาศรับสมัครเภสัชกรเข้าร่วมโครงการพัฒนาศักยภาพ เรื่อง การจัดการยาในระบบบริการสุขภาพ ปี...",
        description:
            "เปิดรับสมัครเภสัชกร เข้าร่วมอบรมหลักสูตรระยะสั้น กว่า 15 สัปดาห์ ออกแบบมาเพื่อเพิ่มพูนทักษะและความรู้ด้านการจัดการยาในโรงพยาบาล",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.newsContainer}>
                {/* HIGHLIGHTS */}
                <div className={styles.newsHeader}>
                    <h2>เรื่องเด่นวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ</h2>
                    <div className={styles.newsNav}>
                        <button className={styles.navBtn}>&lt;</button>
                        <button className={styles.navBtn}>&gt;</button>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="/images/news/img.png" alt="featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                        <h3>วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ จัดอบรมเชิงปฏิบัติการ เรื่อง การใช้ยาปฏิชีวนะอย่างสมเหตุผล</h3>
                        <p>
                            หลักสูตรนี้เป็นส่วนหนึ่งของการอบรมเชิงปฏิบัติการ โดยเน้นการให้ความรู้และทักษะในการใช้ยาอย่างถูกต้องตามแนวทางการรักษา
                        </p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.paginationDots}>
                    <div className={styles.dotActive}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>

                {/* NEWS */}
                <div className={styles.newsRowHeader}>
                    <h2>ข่าวสารวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.newsGrid}>
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
