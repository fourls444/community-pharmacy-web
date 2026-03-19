"use client";

import styles from "./Committee.module.css";

const chairman = {
  name: "ชื่อ นามสกุล",
  position: "ตำแหน่ง",
  description: "คำอธิบาย",
  image: "/images/committee/img (1).png",
};

const committeeMembers = [
  {
    name: "รศ.ดร.ภก.วรรณา",
    position: "ที่ปรึกษา",
    image: "/images/committee/img (2).png",
  },
  {
    name: "ภก.สืบวิชา",
    position: "เลขานุการ",
    image: "/images/committee/img (3).png",
  },
  {
    name: "ภก.สันทัด",
    position: "ที่ปรึกษา",
    image: "/images/committee/img (4).png",
  },
  {
    name: "ภญ.ชนาทิพย์",
    position: "กรรมการกลาง",
    image: "/images/committee/img (5).png",
  },
  {
    name: "ภญ.นิภาภรณ์",
    position: "ที่ปรึกษา",
    image: "/images/committee/img (6).png",
  },
  {
    name: "ภญ.รุ่งนภา",
    position: "นายทะเบียน",
    image: "/images/committee/img (1).png", // Reusing image 1 for the 7th person as only 6 files found. You can update this later.
  },
];

export default function CommitteeContent() {
  return (
    <div className={styles.committeeWrapper}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>ทีมผู้บริหารและกลไกขับเคลื่อนวิทยาลัยฯ</h2>
        <p className={styles.sectionDescription}>
          วิทยาลัยเภสัชกรรมชุมชนแห่งประเทศไทย บริหารงานโดยคณะกรรมการผู้ทรงคุณวุฒิจากหลากหลายภาคส่วน
          ทั้งจากสภาเภสัชกรรม เครือข่ายวิชาการ และเภสัชกรชุมชนต้นแบบ เพื่อบูรณาการองค์ความรู้สู่การปฏิบัติจริง
        </p>
      </header>

      {/* Chairman Section */}
      <section className={styles.chairmanSection}>
        <div className={styles.chairmanCardWrapper}>
          <div className={styles.chairmanCard}>
            <div className={styles.chairmanImageContainer}>
              <div className={styles.chairmanBgImage}></div>
              <img src={chairman.image} alt={chairman.name} className={styles.chairmanImage} />
            </div>
            <div className={styles.chairmanInfo}>
              <h3 className={styles.chairmanName}>{chairman.name}</h3>
              <p className={styles.chairmanPosition}>{chairman.position}</p>
              <p className={styles.chairmanDescription}>{chairman.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid Section */}
      <section className={styles.membersSection}>
        <div className={styles.membersGrid}>
          {committeeMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberImageContainer}>
                <div className={styles.memberBgImage}></div>
                <img src={member.image} alt={member.name} className={styles.memberImage} />
              </div>
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
