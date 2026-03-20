import Image from "next/image";
import styles from "./CoursesSection.module.css";

/* --- SVGs --- */
const GradCapIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const LawIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const EyeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const RibbonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);

const FileIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);


export default function CoursesSection() {
    return (
        <section className={styles.coursesWrapper}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.mainTitle}>พัฒนาความเชี่ยวชาญสู่เภสัชกรสมุนไพรมืออาชีพ</h2>
            </div>

            {/* ================= TOP SECTION ================= */}
            <div className={styles.topSection}>
                {/* Left side: Main Course Card */}
                <div className={styles.mainCourseCard}>
                    <div className={styles.mainCourseHeader}>
                        <div className={styles.mainCourseIcon}><GradCapIcon /></div>
                        <div className={styles.mainCourseTitleBlock}>
                            <h3 className={styles.mainCourseTitle}>หลักสูตรฝึกอบรมเฉพาะทาง</h3>
                            <p className={styles.mainCourseSub}>โดยอยู่ภายใต้การกำกับและรับรองของสภาเภสัชกรรม</p>
                        </div>
                    </div>
                    <div className={styles.mainCourseBody}>
                        <p className={styles.mainCourseDesc}>
                            ราชวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย ด้านการคุ้มครองผู้บริโภคด้านยา หลักสูตรออกแบบเพื่อพัฒนาศักยภาพเภสัชกรให้มีความรู้ ความสามารถและทักษะ ในการดำเนินงานด้านการคุ้มครองผู้บริโภค
                        </p>
                        <div className={styles.tagsRow}>
                            <span className={styles.tag}><LawIcon /> กฎหมายยา</span>
                            <span className={styles.tag}><EyeIcon /> กำกับดูแล</span>
                            <span className={styles.tag}><ShieldIcon /> เฝ้าระวัง</span>
                        </div>
                        <button className={styles.downloadBtnLarge}>
                            <div className={styles.btnIconCircle}><DownloadIcon /></div>
                            ดาวน์โหลดรายละเอียดหลักสูตร
                        </button>
                    </div>
                </div>

                {/* Right side: Top Image & Small Cards */}
                <div className={styles.rightSideContainer}>
                    <div className={styles.topImageContainer}>
                        <Image src="/images/courses/img1.png" alt="Course featured" width={480.5} height={256} className={styles.topFeaturedImage} priority />
                    </div>
                    <div className={styles.twoSmallCards}>
                        <div className={styles.smallCardGreen}>
                            <div className={styles.smCardIcon}><BookIcon /></div>
                            <div className={styles.smCardText}>
                                <h4>การเรียนรู้</h4>
                                <p>ภาคทฤษฎีและปฏิบัติ<br/>เน้นทักษะวิชาชีพ</p>
                            </div>
                        </div>
                        <div className={styles.smallCardWhite}>
                            <div className={styles.smCardIconWhite}><RibbonIcon /></div>
                            <div className={styles.smCardTextWhite}>
                                <h4>การรับรอง</h4>
                                <p>ประกาศนียบัตรมาตรฐานวิชาชีพ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MIDDLE SECTION: 3 CARDS ================= */}
            <div className={styles.threeCardsRow}>
                {/* Card 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeaderImg}>
                        <Image src="/images/courses/card1.jpg" alt="Card 1" width={313} height={156} className={styles.cardHeaderImgEl} />
                    </div>
                    <div className={styles.cardBody}>
                        <h4 className={styles.cardHeaderTitle}>วุฒิบัตรความชำนาญเฉพาะทาง</h4>
                        <p className={styles.cardSubTitle}>Board Certified in<br/>Pharmacy Administration</p>
                        <div className={styles.cardDesc}>
                            <p>สำหรับเภสัชกรที่มุ่งมั่นความเชี่ยวชาญระดับสูง การรับรองจาก CPAT คือกุญแจสำคัญสู่ความเชื่อมั่น ในระดับองค์กรและระดับนโยบาย</p>
                            <ul>
                                <li><strong>มาตรฐานสภาเภสัชกรรม:</strong> จัดสอบและออกหนังสืออนุมัติ/วุฒิบัตร เพื่อรับรองความเชี่ยวชาญในสาขา &quot;การบริหารเภสัชกิจ&quot;</li>
                                <li><strong>Competency Framework:</strong> เน้นการประเมินทักษะการวิเคราะห์ข้อมูลสุขภาพ การจัดการเชิงยุทธศาสตร์ และการตัดสินใจเชิงนโยบาย</li>
                                <li><strong>Expert Network:</strong> ร่วมเป็นส่วนหนึ่งของทำเนียบเภสัชกรผู้เชี่ยวชาญด้าน การบริหารระดับประเทศ</li>
                            </ul>
                        </div>
                        <button className={styles.infoBtnOutline}>ข้อมูลหลักสูตร</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeaderImg}>
                        <Image src="/images/courses/card2.png" alt="Card 2" width={313} height={156} className={styles.cardHeaderImgEl} />
                    </div>
                    <div className={styles.cardBody}>
                        <h4 className={styles.cardHeaderTitle}>หลักสูตรอบรมระยะสั้น</h4>
                        <p className={styles.cardSubTitle}>Management for Smart Pharmacist</p>
                        <div className={styles.cardDesc}>
                            <p>ติดอาวุธทักษะทางธุรกิจและนโยบาย เพื่อเพิ่มมูลค่าให้แก่บทบาทเภสัชกรในทุกภาคส่วน</p>
                            <ul>
                                <li><strong>Pharmaceutical Business Management:</strong> บริหารธุรกิจยาอย่างมืออาชีพ ทั้งการวางแผนกลยุทธ์ การตลาด และการจัดการห่วงโซ่อุปทาน</li>
                                <li><strong>Health Economics &amp; Policy:</strong> เข้าใจกลไกเศรษฐศาสตร์สาธารณสุข เพื่อการวางแผนการเข้าถึงยา (Market Access) และการคัดเลือกยาเข้าบัญชียารายชื่อ</li>
                                <li><strong>Pharmacy Leadership:</strong> พัฒนาทักษะการเป็นผู้นำ การบริหารทีมงาน และการสื่อสารในองค์กรขนาดใหญ่</li>
                                <li><strong>Digital Transformation in Pharmacy:</strong> การใช้ Data Analytics และ AI เพื่อเพิ่มประสิทธิภาพการจัดการเภสัชกิจ</li>
                            </ul>
                        </div>
                        <button className={styles.infoBtnOutline}>ข้อมูลหลักสูตร</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeaderImg}>
                        <Image src="/images/courses/card3.png" alt="Card 3" width={313} height={156} className={styles.cardHeaderImgEl} />
                    </div>
                    <div className={styles.cardBody}>
                        <h4 className={styles.cardHeaderTitle}>บริหารเภสัชกิจ</h4>
                        <p className={styles.cardSubTitle}>ต่อยอดโอกาสที่มากกว่าแค่การจ่ายยา</p>
                        <div className={styles.cardDesc}>
                            <p>เมื่อความรู้ด้านยา ผสมผสานกับทักษะการบริหาร เภสัชกรจะสามารถก้าวสู่บทบาทสำคัญในอุตสาหกรรมสุขภาพ:</p>
                            <ul>
                                <li><strong>Corporate Leader:</strong> ผู้บริหารระดับสูงในบริษัทชั้นนำและผู้ผลิตยาชั้นนำ</li>
                                <li><strong>Market Access Specialist:</strong> ผู้นำนโยบายและวางแผนกลยุทธ์การนำยาใหม่เข้าสู่ตลาด</li>
                                <li><strong>Regulatory &amp; Policy Expert:</strong> ผู้กำหนดนโยบายในหน่วยงานรัฐ เช่น อย., สปสช. หรือกรมต่างๆ</li>
                                <li><strong>Entrepreneurship:</strong> ยกระดับสถานปฏิบัติการเภสัชกรรม (ร้านยา) สู่โมเดลธุรกิจสุขภาพที่ครบวงจรและยั่งยืน</li>
                            </ul>
                        </div>
                        <button className={styles.infoBtnOutline}>ข้อมูลหลักสูตร</button>
                    </div>
                </div>
            </div>

            {/* DOTS (Visual only) */}
            <div className={styles.carouselDots}>
                <span className={`${styles.dot} ${styles.dotActive}`}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>

            {/* ================= BOTTOM CERTIFICATION BANNER ================= */}
            <div className={styles.certFooter}>
                <div className={styles.certLeft}>
                    <div className={styles.certIconContainer}><RibbonIcon /></div>
                    <div className={styles.certTextContainer}>
                        <h3>การรับรองทักษะ:</h3>
                        <p>ผู้ที่ผ่านการอบรมจากวิทยาลัยจะได้รับ <strong>การรับรองทักษะในระดับผู้เชี่ยวชาญเฉพาะทาง</strong> <br/>ซึ่งช่วยยกระดับความสามารถของบุคลากรในวิทยาลัยเภสัชกรรมสมุนไพร</p>
                    </div>
                </div>
                <div className={styles.certRightActions}>
                    <button className={styles.certActionBtnWhite}>
                        <div className={styles.btnIconSmall}><GradCapIcon /></div>
                        สมัครเข้ารับการฝึกอบรม
                    </button>
                    <button className={styles.certActionBtnOutline}>
                        <div className={styles.btnIconSmallTransparent}><FileIcon /></div>
                        ดาวน์โหลดรายละเอียดหลักสูตร
                    </button>
                </div>
            </div>
        </section>
    );
}
