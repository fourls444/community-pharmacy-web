"use client";

import Link from "next/link";
import styles from "./Expertise.module.css";

const expertiseData = [
  {
    id: 1,
    title: "สาขา 1",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img1.png",
    link: "/expertise-detail",
  },
  {
    id: 2,
    title: "สาขา 2",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img2.jpg",
    link: "/expertise-detail",
  },
  {
    id: 3,
    title: "สาขา 3",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img3.png",
    link: "/expertise-detail",
  },
  {
    id: 4,
    title: "สาขา 4",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img4.jpg",
    link: "/expertise-detail",
  },
  {
    id: 5,
    title: "สาขา 5",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img5.png",
    link: "/expertise-detail",
  },
  {
    id: 6,
    title: "สาขา 6",
    description: "เภสัชชุมชน",
    image: "/images/expertise/img6.png",
    link: "/expertise-detail",
  },
];

export default function ExpertiseContent() {
  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.title}>สาขาความเชี่ยวชาญ</h2>
      <div className={styles.expertiseGrid}>
        {expertiseData.map((item) => {
          const content = (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          );

          return item.link ? (
            <Link key={item.id} href={item.link} className={styles.linkWrapper}>
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
}
