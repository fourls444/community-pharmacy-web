"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ExpertiseDetail.module.css";
import {
  FaArrowLeft,
  FaFileArrowDown,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
  FaBookOpen,
  FaLightbulb,
  FaBriefcase,
  FaWrench,
  FaCircleCheck,
} from "react-icons/fa6";

export default function ExpertiseDetail() {
  const [activeTab, setActiveTab] = useState("objectives");

  const objectives = [
    "มีความรู้เชิงลึกในเภสัชวิทยาคลินิก",
    "สามารถให้บริการเภสัชกรรมในโรงพยาบาลได้อย่างมืออาชีพ",
    "มีทักษะในการติดตามและประเมินผลการรักษา",
    "เข้าใจระบบสุขภาพและการทำงานของโรงพยาบาล",
    "สามารถใช้เทคโนโลยีและระบบสารสนเทศทางการแพทย์",
  ];

  const curriculumData = [
    {
      year: "ปีที่ 1",
      subjects: [
        "พื้นฐานเภสัชศาสตร์คลินิก",
        "กายวิภาคและสรีรวิทยาทางคลินิก",
        "เภสัชวิทยาคลินิกเบื้องต้น",
        "การประเมินผู้ป่วย",
      ],
    },
    {
      year: "ปีที่ 2",
      subjects: [
        "เภสัชกรรมคลินิกขั้นสูง",
        "ระบบสุขภาพและโรงพยาบาล",
        "การใช้ยาอย่างสมเหตุผล",
        "การจัดการยาในโรงพยาบาล",
      ],
    },
    {
      year: "ปีที่ 3",
      subjects: [
        "เภสัชกรรมคลินิกเฉพาะทาง",
        "การดูแลผู้ป่วยผู้สูงอายุ",
        "เภสัชกรรมเด็ก",
        "เภสัชบำบัดโรคติดเชื้อ",
      ],
    },
    {
      year: "ปีที่ 4",
      subjects: [
        "ฝึกงานคลินิกในโรงพยาบาล",
        "โครงการพัฒนาระบบบริการ",
        "สัมมนาเภสัชกรรมคลินิก",
        "การเตรียมความพร้อมสู่วิชาชีพ",
      ],
    },
  ];

  const highlights = [
    "หลักสูตรได้รับการรับรองจากสภาเภสัชกรรม",
    "อาจารย์ผู้สอนมีประสบการณ์สูง",
    "มีโรงพยาบาลเครือข่ายฝึกงานกว่า 50 แห่ง",
    "ห้องปฏิบัติการทันสมัยครบครัน",
    "อัตราการมีงานทำสูงถึง 97%",
    "โอกาสทำงานในโรงพยาบาลชั้นนำ",
  ];

  return (
    <div className={styles.detailContainer}>
      {/* 🏛️ Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/expertise/detail/img.jpg"
            alt="Hero Background"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <Link href="/">
          <button className={styles.backBtn}>
            <FaArrowLeft size={14} /> กลับหน้าหลัก
          </button>
        </Link>

        <div className={styles.heroContent}>
          <div className={styles.categoryTag}>วิทยาลัยเภสัชกรรมชุมชน</div>
          <h1 className={styles.title}>สาขา 1</h1>
          <p className={styles.subtitle}>หลักสูตรเภสัชศาสตรบัณฑิต</p>
        </div>
      </section>

      {/* 📄 Main Content Layout */}
      <main className={styles.mainLayout}>
        <div className={styles.contentArea}>
          {/* Card: About */}
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>เกี่ยวกับสาขาวิชา</h2>
            <p className={styles.description}>
              สาขาเภสัชกรรมคลินิกมุ่งเน้นการพัฒนาความรู้และทักษะในการดูแลผู้ป่วยในโรงพยาบาล 
              การประเมินความเหมาะสมของการใช้ยา การติดตามและป้องกันผลข้างเคียงจากยา 
              และการทำงานร่วมกับทีมสหวิชาชีพเพื่อให้ผู้ป่วยได้รับการรักษาที่ดีที่สุด
            </p>
          </section>

          {/* Card: Tabs & Content */}
          <section className={styles.card}>
            <div className={styles.tabsContainer}>
              <div
                className={`${styles.tabItem} ${activeTab === "objectives" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("objectives")}
              >
                วัตถุประสงค์
              </div>
              <div
                className={`${styles.tabItem} ${activeTab === "curriculum" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("curriculum")}
              >
                หลักสูตร
              </div>
              <div
                className={`${styles.tabItem} ${activeTab === "skills" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                ทักษะ
              </div>
              <div
                className={`${styles.tabItem} ${activeTab === "career" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("career")}
              >
                อาชีพ
              </div>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "objectives" && (
                <div>
                  <div className={styles.contentHeader}>
                    <FaLightbulb className={styles.bulbIcon} />
                    <h3 className={styles.contentTitle}>วัตถุประสงค์การเรียนรู้</h3>
                  </div>
                  <p className={`${styles.description} ${styles.tabDescription}`}>
                    หลังจากจบการศึกษา นักศึกษาจะมีคุณสมบัติดังนี้:
                  </p>
                  <ul className={styles.objectiveList}>
                    {objectives.map((obj, i) => (
                      <li key={i} className={styles.objectiveItem}>
                        <FaCircleCheck className={styles.checkIcon} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "curriculum" && (
                <div>
                  <div className={styles.contentHeader}>
                    <FaBookOpen className={styles.bulbIcon} />
                    <h3 className={styles.contentTitle}>โครงสร้างหลักสูตรตามปีการศึกษา</h3>
                  </div>
                  <p className={styles.categorySubLabel}>
                    รายวิชาสำคัญแบ่งตามปีการศึกษา
                  </p>

                  {curriculumData.map((data, idx) => (
                    <div key={idx} className={styles.yearSection}>
                      <h4 className={styles.yearTitle}>{data.year}</h4>
                      <div className={styles.subjectList}>
                        {data.subjects.map((sub, i) => (
                          <div key={i} className={styles.subjectItem}>
                            <div className={styles.bullet}></div>
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "skills" && (
                <div>
                   <div className={styles.contentHeader}>
                    <FaWrench className={styles.bulbIcon} />
                    <h3 className={styles.contentTitle}>ทักษะที่จะได้รับ</h3>
                  </div>
                  <p className={styles.categorySubLabel}>
                    ทักษะและความสามารถที่นักศึกษาจะพัฒนาในสาขานี้
                  </p>
                  <div className={styles.subjectList}>
                    {[
                      "การประเมินและติดตามผลการรักษา",
                      "การจัดการปัญหาการใช้ยา",
                      "ทักษะการทำงานเป็นทีม",
                      "การใช้ระบบสารสนเทศโรงพยาบาล",
                      "การให้คำปรึกษาด้านยา",
                    ].map((skill, i) => (
                      <div key={i} className={styles.subjectItem}>
                        <div className={styles.bullet}></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "career" && (
                <div>
                  <div className={styles.contentHeader}>
                    <FaBriefcase className={styles.bulbIcon} />
                    <h3 className={styles.contentTitle}>เส้นทางอาชีพ</h3>
                  </div>
                  <p className={styles.categorySubLabel}>
                    ตำแหน่งงานและค่าตอบแทนโดยประมาณ
                  </p>
                  <div className={styles.careerList}>
                    {[
                      {
                        title: "เภสัชกรคลินิก",
                        desc: "ให้บริการเภสัชกรรมในโรงพยาบาล",
                        salary: "30,000 - 55,000 บาท/เดือน",
                      },
                      {
                        title: "เภสัชกรผู้เชี่ยวชาญด้านยา",
                        desc: "ให้คำปรึกษาเกี่ยวกับการใช้ยาในโรงพยาบาล",
                        salary: "40,000 - 65,000 บาท/เดือน",
                      },
                      {
                        title: "ผู้จัดการเภสัชกรรมโรงพยาบาล",
                        desc: "บริหารจัดการแผนกเภสัชกรรม",
                        salary: "50,000 - 90,000 บาท/เดือน",
                      },
                    ].map((career, i) => (
                      <div key={i} className={styles.careerCard}>
                        <h4 className={styles.jobTitle}>{career.title}</h4>
                        <p className={styles.jobDesc}>{career.desc}</p>
                        <div className={styles.salaryTag}>{career.salary}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* 📋 Sidebar Area */}
        <aside className={styles.sidebar}>
          {/* 💳 CTA Card */}
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <h3>สนใจสมัครเรียนสาขานี้?</h3>
              <p>ดาวน์โหลดเอกสารหรือสมัครเรียนได้เลยตอนนี้</p>
            </div>
            <button className={styles.applyBtn}>
              <FaBookOpen size={14} /> <span>สมัครเรียน</span>
            </button>
            <button className={styles.downloadBtn}>
              <FaFileArrowDown size={14} /> <span>ดาวน์โหลดเอกสาร</span>
            </button>
          </div>

          {/* Sidebar Card: Important Info */}
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>ข้อมูลสำคัญ</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FaUsers /></div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>จำนวนรับ</span>
                  <span className={styles.infoValue}>25 คน</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FaChartLine /></div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>อัตราการมีงานทำ</span>
                  <span className={styles.infoValue}>97%</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FaGraduationCap /></div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>ระดับปริญญา</span>
                  <span className={styles.infoValue}>ปริญญาตรี 6 ปี</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Card: Highlights */}
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>จุดเด่น</h3>
            <ul className={styles.highlightList}>
              {highlights.map((text, i) => (
                <li key={i} className={styles.highlightItem}>
                  <FaCircleCheck className={styles.circleCheckIcon} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
