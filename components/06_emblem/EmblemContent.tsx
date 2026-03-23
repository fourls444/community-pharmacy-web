"use client";

import Image from "next/image";
import styles from "./Emblem.module.css";
import { FaUserAlt, FaQuoteRight } from "react-icons/fa";

export default function EmblemContent() {
  return (
    <div className={styles.logoGrid}>
      {/* Left Column */}
      <div className={styles.leftCol}>
        {/* Main Logo Card */}
        <div className={styles.mainCard}>
          <FaQuoteRight className={styles.quoteIcon} />
          <div className={styles.logoImageSection}>
            <Image
              src="/images/logo/logo.png"
              alt="CCPT Logo"
              width={220}
              height={220}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.mainCardBody}>
            <h2 className={styles.cardTitle}>ตราสัญลักษณ์ของ <br /> วิทยาลัยเภสัชกรรมชุมชน</h2>
            <p className={styles.cardText}>
              ออกแบบโดยผสมผสานเอกลักษณ์ดั้งเดิมของวิชาชีพเข้ากับรูปลักษณ์ที่ทันสมัย สื่อถึงการพัฒนาที่ไม่หยุดนิ่ง
            </p>
          </div>
        </div>

        {/* Mortar and Pestle Card */}
        <div className={styles.smallCard}>
          <div className={styles.iconCircle}>
            <FaUserAlt />
          </div>
          <div className={styles.smallCardBody}>
            <h3 className={styles.smallCardTitle}>โกร่งบดยา (The Mortar and Pestle)</h3>
            <p className={styles.smallCardText}>
              สัญลักษณ์อมตะของวิชาชีพเภสัชกรรม สื่อถึงความรู้ ทักษะ และความเชี่ยวชาญในการจัดเตรียมยาและเวชภัณฑ์เพื่อดูแลสุขภาพประชาชน
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightCol}>
        {/* Dynamic Waves Card */}
        <div className={styles.smallCard}>
          <div className={styles.iconCircle}>
            <FaUserAlt />
          </div>
          <div className={styles.smallCardBody}>
            <h3 className={styles.smallCardTitle}>เส้นสายเกลียวคลื่น (The Dynamic Waves)</h3>
            <ul className={styles.colorList}>
              <li><strong className={styles.orange}>สีส้ม:</strong> พลังแห่งความสร้างสรรค์ การเข้าถึงง่าย และความกระตือรือร้นในการบริการชุมชน</li>
              <li><strong className={styles.darkBlue}>สีน้ำเงิน:</strong> ความน่าเชื่อถือ ความเป็นมืออาชีพ และจริยธรรมแห่งวิชาชีพ</li>
              <li><strong className={styles.lightBlue}>สีฟ้า:</strong> ความโปร่งใส ความทันสมัย และการนำนวัตกรรมมาใช้ในระบบสุขภาพ</li>
            </ul>
          </div>
        </div>

        {/* Color Psychology Card */}
        <div className={styles.smallCard}>
          <div className={styles.iconCircle}>
            <FaUserAlt />
          </div>
          <div className={styles.smallCardBody}>
            <h3 className={styles.smallCardTitle}>การใช้โทนสี (Color Psychology)</h3>
            <ul className={styles.bulletList}>
              <li>
                <strong>สีเขียว (ในโกร่งยา):</strong>
                สื่อถึงสุขภาพ ชีวิต และการเยียวยา ซึ่งเป็นหัวใจหลักของเภสัชกรชุมชน
              </li>
              <li>
                <strong>สีน้ำเงินและสีฟ้า:</strong>
                สื่อถึงความร่วมมือและความเป็นปึกแผ่นภายใต้สภาเภสัชกรรม
              </li>
            </ul>
          </div>
        </div>

        {/* Abbreviations Card */}
        <div className={styles.smallCard}>
          <div className={styles.iconCircle}>
            <FaUserAlt />
          </div>
          <div className={styles.smallCardBody}>
            <h3 className={styles.smallCardTitle}>ตัวย่อ วภช. และ CCPT</h3>
            <p className={styles.smallCardText}>
              การวางชื่อย่อทั้งภาษาไทย (วภช.) และภาษาอังกฤษ (CCPT - The College of Community Pharmacy of Thailand) คู่กับตราสัญลักษณ์ เพื่อสร้างการจดจำแบรนด์องค์กร (Brand Identity) ในระดับสากล
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
