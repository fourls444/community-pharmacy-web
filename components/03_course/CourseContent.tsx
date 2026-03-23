"use client";

import Image from "next/image";
import styles from "./Course.module.css";
import {
  FaGraduationCap,
  FaRegEye,
  FaShieldHalved,
  FaDownload,
  FaBook,
  FaAward,
  FaFileLines,
  FaChartLine,
  FaFlask,
  FaChevronRight
} from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const mockCourseData = [
  {
    icon: <FaFileLines />,
    title: "หลักสูตรระยะสั้น",
    subtitle: "(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)",
    desc: "เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ",
    detailTitle: "รายละเอียด",
    details: [
      "16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)",
      "ฝึกปฏิบัติจริงในสถานพยาบาลจริง",
      "ระยะเวลา: 4 เดือน (เต็มเวลา)",
      "คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ"
    ]
  },
  {
    icon: <FaChartLine />,
    title: "หลักสูตรแสดงความรู้ความชำนาญ",
    subtitle: "PHARMACY RESIDENCY TRAINING",
    desc: "พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์",
    detailTitle: "หัวข้อสำคัญ",
    details: [
      "โครงสร้าง: 134 หน่วยกิต",
      "ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง",
      "คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ"
    ]
  },
  {
    icon: <FaFlask />,
    title: "หลักสูตรอบรมเชิงปฏิบัติการ",
    subtitle: "PHARMACOGENOMICS FOR ALLIED HEALTH",
    desc: "พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์",
    detailTitle: "รายละเอียด",
    details: [
      "โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)",
      "ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล",
      "คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ"
    ]
  }
];

export default function CourseContent() {
  return (
    <div className={styles.container}>

      {/* 🏛️ Top Section: Featured Hero (Old Block) */}
      <div className={styles.heroGrid}>
        <div className={styles.mainHeroCard}>
          <div className={styles.heroHeader}>
            <div className={styles.heroIconBox}>
              <FaGraduationCap />
            </div>
            <div className={styles.heroTitleArea}>
              <h1 className={styles.heroTitle}>หลักสูตรฝึกอบรมเฉพาะทาง</h1>
              <p className={styles.heroSub}>โดยอยู่ภายใต้การกำกับและรับรองของสภาเภสัชกรรม</p>
            </div>
          </div>

          <div className={styles.heroBody}>
            <p className={styles.heroDesc}>
              ราชวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย ด้านการคุ้มครองผู้บริโภคด้านยา
              หลักสูตรออกแบบเพื่อพัฒนาศักยภาพเภสัชกรให้มีความรู้ความสามารถและทักษะ
              ในการดำเนินงานด้านการคุ้มครองผู้บริโภค
            </p>

            <div className={styles.heroTags}>
              <div className={styles.heroTag}>
                <FaDollarSign /> <span>กฎหมายยา</span>
              </div>
              <div className={styles.heroTag}>
                <FaRegEye /> <span>กำกับดูแล</span>
              </div>
              <div className={styles.heroTag}>
                <FaShieldHalved /> <span>เฝ้าระวัง</span>
              </div>
            </div>

            <div className={styles.heroBtnArea}>
              <button className={styles.heroDlBtn}>
                <div className={styles.heroDlIconBox}>
                  <FaDownload />
                </div>
                <span>ดาวน์โหลดรายละเอียดหลักสูตร</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Right: Image & Balanced Stats */}
        <div className={styles.heroRight}>
          <div className={styles.heroImageCard}>
            <Image
              src="/images/course/img1.jpg"
              alt="Pharmacy"
              width={800}
              height={400}
              className={styles.heroImg}
              priority
            />
          </div>

          <div className={styles.heroStatsGrid}>
            <div className={`${styles.heroStatCard} ${styles.heroStatGreen}`}>
              <FaBook className={styles.heroStatIcon} />
              <h2 className={styles.heroStatTitle}>การเรียนรู้</h2>
              <p className={styles.heroStatText}>ภาคทฤษฎีและปฏิบัติ เน้นทักษะวิชาชีพ</p>
            </div>
            <div className={`${styles.heroStatCard} ${styles.heroStatWhite}`}>
              <FaAward className={styles.heroStatIcon} style={{ color: '#8e9a4e' }} />
              <h2 className={styles.heroStatTitle}>การรับรอง</h2>
              <p className={styles.heroStatText}>ประกาศนียบัตร มาตรฐานวิชาชีพ</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.courseWrapper}>
        {/* HEADING SECTION FOR NEW CARDS */}
        <div className={styles.textHeadingBox}>
          <h2 className={styles.heading}>
            "ยกระดับมาตรฐานเภสัชกรรมชุมชน <br /> เพื่อการดูแลสุขภาพปฐมภูมิที่มีคุณภาพ"
          </h2>
          <p className={styles.subHeading}>
            วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย (วภช.): องค์กรวิชาการกลางมุ่งสร้างความเชี่ยวชาญ และมาตรฐานการบริการระดับปฐมภูมิที่มีคุณภาพ
          </p>
        </div>

        {/* 📚 ROW 1: SHORT TERM */}
        <div className={styles.rowHeader}>
          <h2 className={styles.rowTitle}>หลักสูตรระยะสั้น</h2>
          <button className={styles.viewAllBtn}>
            ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} />
          </button>
        </div>
        <div className={styles.cardsRow}>
          {mockCourseData.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>

        {/* 📚 ROW 2: MEDIUM TERM */}
        <div className={styles.rowHeader}>
          <h2 className={styles.rowTitle}>หลักสูตรระยะกลาง</h2>
          <button className={styles.viewAllBtn}>
            ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} />
          </button>
        </div>
        <div className={styles.cardsRow}>
          {mockCourseData.map((course, i) => (
            <CourseCard key={i} {...course} title="หลักสูตรระยะกลาง" />
          ))}
        </div>

        {/* 📚 ROW 3: LONG TERM */}
        <div className={styles.rowHeader}>
          <h2 className={styles.rowTitle}>หลักสูตรระยะยาว</h2>
          <button className={styles.viewAllBtn}>
            ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} />
          </button>
        </div>
        <div className={styles.cardsRow}>
          {mockCourseData.map((course, i) => (
            <CourseCard key={i} {...course} title="หลักสูตรระยะยาว" />
          ))}
        </div>

      </div>
    </div>
  );
}

function CourseCard({ icon, title, subtitle, desc, detailTitle, details }: any) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          <div style={{ fontSize: '24px', color: 'white', display: 'flex' }}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubTitle}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.detailSection}>
          <h4 className={styles.detailTitle}>{detailTitle}</h4>
          <ul className={styles.detailList}>
            {details.map((detail: string, i: number) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className={styles.downloadBtn}>
        <FaDownload /> ดาวน์โหลด
      </button>
    </div>
  );
}
