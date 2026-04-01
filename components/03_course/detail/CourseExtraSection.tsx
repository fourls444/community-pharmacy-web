"use client";

import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaUsers, FaFileLines } from "react-icons/fa6";
import styles from "../CourseDetail.module.css";

interface CourseOffered {
  code: string;
  branch: string;
  title: string;
  desc: string;
  seats: number;
}

interface CourseExtraSectionProps {
  coursesOffered: CourseOffered[];
}

export default function CourseExtraSection({ coursesOffered }: CourseExtraSectionProps) {
  return (
    <section className={styles.fullWidthSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleRow}>
          <FaGraduationCap className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>สาขาวิชาที่เปิดสอน</h2>
        </div>
        <p className={styles.sectionSubtitle}>
          เลือกสาขาวิชาที่ตรงกับความสนใจและเป้าหมายของคุณ
        </p>
      </div>

      <div className={styles.courseGrid}>
        {coursesOffered.map((course, idx) => (
          <div key={idx} className={styles.courseCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.branchTag}>{course.branch}</span>
                <span className={styles.courseCode}>{course.code}</span>
              </div>
              <h3 className={styles.courseCardTitle}>{course.title}</h3>
              <p className={styles.courseCardDesc}>{course.desc}</p>
            </div>
            
            <div className={styles.cardStats}>
              <div className={styles.statItem}>
                <FaUsers size={14} />
                <span>จำนวนรับ <span className={styles.statValue}>{course.seats} คน</span></span>
              </div>
              <Link href="/expertise-detail">
                <button className={styles.detailBtn}>
                   <FaFileLines size={14} /> ดูรายละเอียด
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
