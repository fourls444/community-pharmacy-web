import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import HistorySection from "./components/HistorySection/HistorySection";
import CollegesSection from "./components/CollegesSection/CollegesSection";
import MeetingsSection from "./components/MeetingsSection/MeetingsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import RegistrationModal from "../components/ui/RegistrationModal";

export default function RoyalCollegePage() {
    return (
        <div style={{ fontFamily: "var(--font-ibm-plex-sans-thai), sans-serif" }}>
            <RegistrationModal />
            <HeroSection />
            <AboutSection />
            <HistorySection />
            <CollegesSection />
            <MeetingsSection />
            <NewsSection />
        </div>
    );
}