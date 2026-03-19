"use client";

import styles from "./History.module.css";
// No icons needed in HistoryContent now, keeping imports clean

const historyData = [
  {
    year: "2564",
    title: "จุดเริ่มต้นแห่งการยกระดับวิชาชีพ",
    description: "จัดตั้งขึ้นตามข้อบังคับสภาเภสัชกรรม ว่าด้วยวิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย พ.ศ. 2564 ภายใต้การกำกับดูแลของสภาเภสัชกรรม",
  },
  {
    year: "2565",
    title: "วางรากฐานองค์กรวิชาการกลาง",
    description: "มุ่งเน้นการเป็นศูนย์กลางวิชาการด้านเภสัชกรรมชุมชน เพื่อตอบสนองต่อการเปลี่ยนแปลงของระบบสุขภาพไทย เช่น สังคมสูงวัย และโรคไม่ติดต่อเรื้อรัง (NCDs)",
  },
  {
    year: "2566",
    title: "เสริมความเข้มแข็งระบบปฐมภูมิ",
    description: "พัฒนามาตรฐานการบริการในสถานปฏิบัติการ (ร้านยา) และหน่วยบริการปฐมภูมิ เพื่อให้เภสัชกรเป็นที่พึ่งด้านสุขภาพที่เข้าถึงง่ายที่สุดในชุมชน",
  },
  {
    year: "ปัจจุบัน",
    title: "มุ่งสู่ความเชี่ยวชาญเฉพาะทาง",
    description: "ขยายบทบาทในการรับรองความรู้ความชำนาญ และสร้างเครือข่ายความร่วมมือทางวิชาการทั้งในและต่างประเทศ เพื่อความยั่งยืนของวิชาชีพ",
  },
];

export default function HistoryContent() {
  return (
    <>
      <h1 className={styles.contentTitle}>
        “ยกระดับมาตรฐานเภสัชกรรมชุมชน <br />
        เพื่อการดูแลสุขภาพปฐมภูมิที่มีคุณภาพ”
      </h1>
      <p className={styles.description}>
        วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.): องค์กรวิชาการกลางมุ่งสร้างความเชี่ยวชาญ <br />
        และมาตรฐานการบริการระดับปฐมภูมิที่มีคุณภาพ
      </p>

      <div className={styles.timeline}>
        {historyData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            {/* Timeline Label with Gradient */}
            <div className={styles.timeLabel}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.subtitleLabel}>{item.title}</span>
            </div>

            {/* Content Details */}
            <div className={styles.details}>
              <p className={styles.milestoneDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Box Section */}
      <div className={styles.quoteBox}>
        <div className={styles.quoteContent}>
          <h2 className={styles.quoteTitle}>"เพราะโลกเปลี่ยนไป เราจึงต้องก้าวให้ทัน"</h2>
          <div className={styles.quoteBody}>
            <span className={styles.quoteIconLeft}>“</span>
            <p className={styles.quoteText}>
              เรามุ่งมั่นพัฒนาศักยภาพเภสัชกรชุมชนให้มีความเชี่ยวชาญเฉพาะทาง พร้อมรับมือกับความท้าทายใหม่ๆ ในระบบสาธารณสุข และยกระดับมาตรฐานบริการในร้านยาให้เป็นส่วนหนึ่งของระบบบริการปฐมภูมิที่แข็งแกร่ง
            </p>
            <span className={styles.quoteIconRight}>”</span>
          </div>
        </div>
      </div>
    </>
  );
}
