"use client";

import styles from "./Vision.module.css";
import { 
  FaBullseye, 
  FaChartLine, 
  FaBookOpen, 
  FaUsers, 
  FaRegFileAlt, 
  FaUserFriends 
} from "react-icons/fa";
import { BsAward } from "react-icons/bs";

const objectiveCards = [
  {
    icon: <FaChartLine />,
    title: "สร้างความก้าวหน้า",
    text: "ส่งเสริมองค์ความรู้และความชำนาญเฉพาะทาง ให้แก่เภสัชกรชุมชน"
  },
  {
    icon: <FaBookOpen />,
    title: "พัฒนาอย่างยั่งยืน",
    text: "เป็นกลไกสำคัญในการขับเคลื่อนระบบสุขภาพ ของประเทศไทยให้มั่นคงและยั่งยืน"
  },
  {
    icon: <FaUserFriends />,
    title: "ยกระดับคุณภาพ",
    text: "พัฒนามาตรฐานการบริการในสถานปฏิบัติการ (ร้านยา) และหน่วยบริการปฐมภูมิ"
  },
  {
    icon: <BsAward />,
    title: "เสริมสร้างบทบาท",
    text: "ผลักดันให้เภสัชกรชุมชนเป็นบุคลากรด่านหน้าที่ดูแลสุขภาพ ประชาชนอย่างใกล้ชิด"
  }
];

const missionItems = [
  { title: "พัฒนาหลักสูตร:", desc: "สร้างระบบการฝึกอบรมเพื่อความชำนาญเฉพาะทาง" },
  { title: "รับรองความรู้:", desc: "ดำเนินการสอบและประเมินผลเพื่อมอบวุฒิบัตร" },
  { title: "ส่งเสริมวิจัยและนวัตกรรม:", desc: "สนับสนุนงานวิจัยเพื่อพัฒนางานบริการ" },
  { title: "สร้างเครือข่าย:", desc: "เชื่อมโยงความร่วมมือทั้งในและต่างประเทศ" }
];

const roleItems = [
  { title: "การรับรองมาตรฐาน:", desc: "รับรองหลักสูตรและสถาบันฝึกอบรมทั่วประเทศ" },
  { title: "การประเมินผล:", desc: "จัดสอบและเสนอรายชื่อผู้ผ่านเกณฑ์ เพื่อรับวุฒิบัตรความชำนาญ" },
  { title: "ศูนย์กลางวิชาการ:", desc: "แลกเปลี่ยนองค์ความรู้ ประสบการณ์ และจัดประชุมวิชาการ" },
  { title: "ที่ปรึกษาเชิงวิชาการ:", desc: "เสนอแนะแนวทางพัฒนาวิชาชีพอย่างต่อเนื่อง" }
];

export default function VisionContent() {
  return (
    <div className={styles.visionContainer}>
      {/* Top: Mission & Roles (2 large cards) */}
      <div className={styles.missionRoleGrid}>
        {/* Mission Column */}
        <div className={styles.detailsCard}>
          <div className={styles.detailsHeaderBox}>
            <div className={styles.detailsIconCircle}>
              <FaRegFileAlt />
            </div>
            <h3 className={styles.detailsTitle}>พันธกิจของวิทยาลัย</h3>
          </div>
          <ul className={styles.detailsList}>
            {missionItems.map((item, idx) => (
              <li key={idx} className={styles.detailsListItem}>
                <strong className={styles.itemTag}>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Role Column */}
        <div className={styles.detailsCard}>
          <div className={styles.detailsHeaderBox}>
            <div className={styles.detailsIconCircle}>
              <FaUsers />
            </div>
            <h3 className={styles.detailsTitle}>บทบาทหน้าที่ (Our Roles)</h3>
          </div>
          <ul className={styles.detailsList}>
            {roleItems.map((item, idx) => (
              <li key={idx} className={styles.detailsListItem}>
                <strong className={styles.itemTag}>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Goals (4 small cards) */}
      <div className={styles.objectiveSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>เป้าหมายเพื่อยกระดับมาตรฐานวิชาชีพ</h2>
          <p className={styles.subTitle}>เราก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะ</p>
        </div>

        <div className={styles.objectiveGrid}>
          {objectiveCards.map((card, idx) => (
            <div key={idx} className={styles.objectiveCard}>
              <div className={styles.cardIconBox}>{card.icon}</div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
