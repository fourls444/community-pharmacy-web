"use client";

import Image from "next/image";
import { 
  FaBullseye, 
  FaChartLine, 
  FaBookOpen, 
  FaUsers, 
  FaAward, 
  FaRegFileAlt, 
  FaUserFriends,
  FaLightbulb,
  FaBook,
  FaHeart,
  FaSearch,
  FaBalanceScale,
  FaHandHoldingHeart,
  FaShieldAlt
} from "react-icons/fa";
import { HiOutlineEye, HiOutlineInformationCircle } from "react-icons/hi";
import styles from "./Curriculum.module.css";

const curriculumObjectives = [
  {
    icon: <FaChartLine />,
    title: "พัฒนาศักยภาพเภสัชกร",
    description: "ให้มีความเชี่ยวชาญด้านการคุ้มครองผู้บริโภคด้านยาและสุขภาพ",
  },
  {
    icon: <FaBookOpen />,
    title: "ส่งเสริมองค์ความรู้",
    description: "ด้านกฎหมายและระบบกำกับดูแลผลิตภัณฑ์สุขภาพ",
  },
  {
    icon: <FaUsers />,
    title: "สร้างเครือข่าย",
    description: "ผู้เชี่ยวชาญในการคุ้มครองผู้บริโภคในระบบสาธารณสุข",
  },
  {
    icon: <FaAward />,
    title: "ยกระดับมาตรฐาน",
    description: "วิชาชีพเภสัชกรรมในสาขาการคุ้มครองผู้บริโภค",
  },
];

const courseStructureRow1 = [
  {
    icon: <FaBalanceScale />,
    title: "ระบบกฎหมายและนโยบาย",
    description: "ศึกษากฎหมายยาและกฎระเบียบที่เกี่ยวข้องกับการคุ้มครองผู้บริโภค",
    image: "/images/curriculum/img1.jpg",
  },
  {
    icon: <HiOutlineEye />,
    title: "การกำกับดูแลผลิตภัณฑ์",
    description: "เรียนรู้กระบวนการกำกับดูแลและตรวจสอบคุณภาพผลิตภัณฑ์",
    image: "/images/curriculum/img2.png",
  },
  {
    icon: <FaShieldAlt />,
    title: "การเฝ้าระวังความปลอดภัย",
    description: "เรียนรู้กระบวนการกำกับดูแลและตรวจสอบคุณภาพผลิตภัณฑ์",
    image: "/images/curriculum/img3.png",
  },
];

const courseStructureRow2 = [
  {
    icon: <FaHandHoldingHeart />,
    title: "จริยธรรมทางวิชาชีพ",
    description: "หลักการคุ้มครองสิทธิผู้บริโภคและจรรยาบรรณวิชาชีพ",
    image: "/images/curriculum/img4.png",
  },
  {
    icon: <FaSearch />,
    title: "การวิจัยและพัฒนา",
    description: "วิธีการวิจัยเพื่อพัฒนางานคุ้มครองผู้บริโภคอย่างเป็นระบบ",
    image: "/images/curriculum/img5.png",
  },
];

export default function CurriculumContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.contentTitle}>ยกระดับความรู้ สู่วุฒิบัตรความชำนาญ</h1>
        <p className={styles.description}>
          วิทยาลัยเภสัชกรรมชุมชนฯ มุ่งเน้นการสร้างมาตรฐานความเชี่ยวชาญที่จับต้องได้ <br />
          ผ่านหลักสูตรที่ออกแบบมาเพื่อตอบโจทย์การทำงานจริงในยุคปัจจุบัน
        </p>
      </div>

      {/* Objectives Section */}
      <div className={styles.objectives}>
        <div className={styles.objBadge}>
          <FaBullseye className={styles.badgeIcon} /> เป้าหมายหลักสูตร
        </div>
        <h2 className={styles.objTitle}>วัตถุประสงค์ของหลักสูตร</h2>
        <p className={styles.objSubtitle}>เป้าหมายในการพัฒนาผู้เชี่ยวชาญด้านการคุ้มครองผู้บริโภค</p>

        <div className={styles.objGrid}>
          {curriculumObjectives.map((obj, i) => (
            <div key={i} className={styles.objCard}>
              <div className={styles.objIconBox}>
                {obj.icon}
              </div>
              <div className={styles.objInfo}>
                <h4 className={styles.objCardTitle}>{obj.title}</h4>
                <p className={styles.objCardDesc}>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structure Section */}
      <div className={styles.structSection}>
        <div className={styles.objBadge}>
          <FaBookOpen className={styles.badgeIcon} /> เนื้อหาการเรียนรู้
        </div>
        <h2 className={styles.objTitle}>โครงสร้างหลักสูตร</h2>
        <p className={styles.objSubtitle}>ภาคทฤษฎีและภาคปฏิบัติ เน้นการพัฒนาทักษะเชิงวิชาชีพ</p>

        <div className={styles.structGrid}>
          {courseStructureRow1.map((item, i) => (
            <div key={i} className={styles.structCard}>
              <div className={styles.structCardHeader}>
                <div className={styles.structCardHeaderText}>
                  <div className={styles.structIconBox}>{item.icon}</div>
                  <h4 className={styles.structCardTitle}>{item.title}</h4>
                </div>
                <div className={styles.structCardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.structCardImage} />
                </div>
              </div>
              <div className={styles.structCardBottom}>
                <p className={styles.structCardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.structGrid} ${styles.structGridRow2}`}>
          {courseStructureRow2.map((item, i) => (
            <div key={i} className={styles.structCard} style={{ flex: 1 }}>
              <div className={styles.structCardHeader}>
                <div className={styles.structCardHeaderText}>
                  <div className={styles.structIconBox}>{item.icon}</div>
                  <h4 className={styles.structCardTitle}>{item.title}</h4>
                </div>
                <div className={styles.structCardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.structCardImage} />
                </div>
              </div>
              <div className={styles.structCardBottom}>
                <p className={styles.structCardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
