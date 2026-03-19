"use client";

import styles from "./Expertise.module.css";

const expertiseData = [
  {
    id: 1,
    title: "สาขา 1",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img1.png",
  },
  {
    id: 2,
    title: "สาขา 2",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img2.jpg",
  },
  {
    id: 3,
    title: "สาขา 3",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img3.png",
  },
  {
    id: 4,
    title: "สาขา 4",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img4.jpg",
  },
  {
    id: 5,
    title: "สาขา 5",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img5.png",
  },
  {
    id: 6,
    title: "สาขา 6",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img6.png",
  },
];

export default function ExpertiseContent() {
  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.title}>สาขาความเชี่ยวชาญ</h2>
      <div className={styles.expertiseGrid}>
        {expertiseData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
