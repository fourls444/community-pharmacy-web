"use client";

import Image from "next/image";
import styles from "./Contact.module.css";
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";

export default function ContactContent() {
  return (
    <div className={styles.contactGrid}>
      {/* Left Column: Image and Intro */}
      <div className={styles.introCol}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/contact/img.png" 
            alt="Pharmacists" 
            width={600} 
            height={400} 
            className={styles.introImage}
          />
        </div>
        <div className={styles.introText}>
          <h2 className={styles.introTitle}>วิทยาลัยเภสัชกรรมชุมชน</h2>
          <p className={styles.introDesc}>
            วิทยาลัยเภสัชกรรมชุมชนฯ มุ่งเน้นการสร้างมาตรฐานความเชี่ยวชาญที่จับต้องได้ 
            ผ่านหลักสูตรที่ออกแบบมาเพื่อตอบโจทย์การทำงานจริงในยุคปัจจุบัน
          </p>
        </div>
      </div>

      {/* Right Column: Green Info Card */}
      <div className={styles.infoCol}>
        <div className={styles.infoCard}>
          <h3 className={styles.cardMainTitle}>วิทยาลัยเภสัชกรรมชุมชน</h3>
          
          <div className={styles.infoList}>
            {/* Address */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <HiOutlineMapPin />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>ที่อยู่</h4>
                <p className={styles.itemText}>
                  อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 
                  ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                </p>
              </div>
            </div>

            {/* Work Time */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <HiOutlineClock />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>เวลาทำการ</h4>
                <p className={styles.itemText}>
                  วันจันทร์ - ศุกร์ | 08.30 - 16.30 น. (ยกเว้นวันหยุดนักขัตฤกษ์)
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <HiOutlinePhone />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>โทรศัพท์</h4>
                <p className={styles.itemText}>0 2591 9992 (คู่สายอัตโนมัติ)</p>
              </div>
            </div>

            {/* Coordinator */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <HiOutlineUser />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>ผู้ประสานงานหลักของวิทยาลัย</h4>
                <p className={styles.itemText}>ผศ.ดร.ภก.สุรสิทธิ์ ล้อจิตรลอำนวย</p>
                <p className={styles.itemSubText}>Lochidamnuay-s@su.ac.th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
