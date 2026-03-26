"use client";

import styles from "./Sidebar.module.css";

// รายการเมนูสำหรับ Sidebar
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
  activeTab: string; // ID ของแท็บที่กำลังเลือก
  onTabChange: (id: string) => void; // ฟังก์ชันเรียกเมื่อมีการคลิกเปลี่ยนแท็บ
}

/**
 * ส่วนของ Sidebar ที่ใช้แสดงเมนูนำทางและคำขวัญ
 */
export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* ส่วนหัวของ Sidebar แสดงคำขวัญ */}
      <h3 className={styles.sidebarTitle}>
        “ปกป้องสิทธิผู้บริโภค <br />
        สร้างสังคมสุขภาพดี”
      </h3>
      
      {/* ส่วนรายการเมนูนำทาง */}
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
