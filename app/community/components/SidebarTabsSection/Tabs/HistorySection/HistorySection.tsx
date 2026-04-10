"use client";
import styles from "./HistorySection.module.css";

const TIMELINE_DATA = [
    {
        year: "2564",
        title: "จุดเริ่มต้นแห่งการยกระดับวิชาชีพ",
        description:
        "จัดตั้งขึ้นตามข้อบังคับสภาเภสัชกรรม ว่าด้วยวิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย พ.ศ. 2564 ภายใต้การกำกับดูแลของสภาเภสัชกรรม"
        },
    {
        year: "2565",
        title: "วางรากฐานองค์กรวิชาการกลาง",
        description:
            "มุ่งเน้นการเป็นศูนย์กลางวิชาการด้านเภสัชกรรมชุมชน เพื่อตอบสนองต่อการเปลี่ยนแปลงของระบบสุขภาพไทย เช่น สังคมสูงวัย และโรคไม่ติดต่อเรื้อรัง (NCDs)",
    },
    {
        year: "2566",
        title: "เสริมความเข้มแข็งระบบปฐมภูมิ",
        description:
            "พัฒนามาตรฐานการบริการในสถานปฏิบัติการ (ร้านยา) และหน่วยบริการปฐมภูมิ เพื่อให้เภสัชกรเป็นที่พึ่งด้านสุขภาพที่เข้าถึงง่ายที่สุดในชุมชน",
    },
    {
        year: "ปัจจุบัน",
        title: "มุ่งสู่ความเชี่ยวชาญเฉพาะทาง",
        description:
            "ขยายบทบาทในการรับรองความรู้ความชำนาญ และสร้างเครือข่ายความร่วมมือทางวิชาการทั้งในและต่างประเทศ เพื่อความยั่งยืนของวิชาชีพ",
    },
];

export default function HistorySection() {
    return (
        <>
            {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            "“ยกระดับมาตรฐานเภสัชกรรมชุมชน เพื่อการดูแลสุขภาพปฐมภูมิที่มีคุณภาพ”"
                        </h2>

                        <p className={styles.subText}>
                           วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.): องค์กรวิชาการกลางมุ่งสร้างความเชี่ยวชาญ และมาตรฐานการบริการระดับปฐมภูมิที่มีคุณภาพ
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
                                </div>
                            ))}
                        </div>
        </>
    );
}
