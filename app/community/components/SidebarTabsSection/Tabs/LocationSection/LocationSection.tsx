import styles from "./LocationSection.module.css";

/* SVG Icons — all white for green background */
const PinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ClockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const PersonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default function LocationSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT: Image + text below */}
                <div className={styles.leftColumn}>
                    <img src="/images/location/img1.jpg" alt="Pharmacist" className={styles.mainImage} />
                    <div className={styles.leftText}>
                        <h3>วิทยาลัยเภสัชกรรมชุมชน</h3>
                        <p>“วิทยาลัยเภสัชกรรมชุมชนฯมุ่งเน้นการสร้างมาตรฐานความเชี่ยวชาญที่จับต้องได้ผ่านหลักสูตรที่ออกแบบมาเพื่อตอบโจทย์การทำงานจริงในยุคปัจจุบัน”</p>
                    </div>
                </div>

                {/* RIGHT: Full green contact card */}
                <div className={styles.rightColumn}>
                    <h2 className={styles.rightTitle}>วิทยาลัยเภสัชกรรมชุมชน</h2>

                    <div className={styles.contactList}>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><PinIcon /></div>
                            <div>
                                <h4>ที่อยู่</h4>
                                <p>อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 <br></br>ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><ClockIcon /></div>
                            <div>
                                <h4>เวลาทำการ</h4>
                                <p>วันจันทร์ - ศุกร์ | 08.30 - 16.30 น. (ยกเว้นวันหยุดนักขัตฤกษ์)</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><PhoneIcon /></div>
                            <div>
                                <h4>โทรศัพท์</h4>
                                <p>0 2591 9992 (คู่สายอัตโนมัติ)</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><PersonIcon /></div>
                            <div>
                                <h4>ผู้ประสานงานหลักของวิทยาลัย</h4>
                                <p>ผศ.ดร.ภก.สุรสิทธิ์ ล้อจิตรอำนวย</p>
                                <p>Lochidamnuay-s@su.ac.th</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
