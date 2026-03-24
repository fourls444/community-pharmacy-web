"use client";

import styles from "./Sidebar.module.css";

const menuItems = [
  { id: "history", name: "ประวัติความเป็นมา" },
  { id: "vision", name: "วิสัยทัศน์และพันธกิจ" },
  { id: "course", name: "ข้อมูลหลักสูตร" },
  { id: "expertise", name: "สาขาความเชี่ยวชาญ" },
  { id: "committee", name: "คณะกรรมการบริหาร" },
  { id: "emblem", name: "ตราสัญลักษณ์" },
  { id: "contact", name: "ติดต่อและสถานที่ตั้ง" },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>
        “ปกป้องสิทธิผู้บริโภค <br />
        สร้างสังคมสุขภาพดี”
      </h3>
      <ul className={styles.menuList}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`${styles.menuItem} ${isActive ? styles.activeItem : ""}`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
