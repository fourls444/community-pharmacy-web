"use client";

import { useState } from "react";
import Banner from "@/components/ui/Banner";
import IntroSection from "@/components/home/IntroSection";
import Sidebar from "@/components/home/Sidebar";
import HistoryContent from "@/components/01_history/HistoryContent";
import VisionContent from "@/components/02_vision/VisionContent";
import CourseContent from "@/components/03_course/CourseContent";
import ExpertiseContent from "@/components/04_expertise/ExpertiseContent";
import CommitteeContent from "@/components/05_committee/CommitteeContent";
import EmblemContent from "@/components/06_emblem/EmblemContent";
import ContactContent from "@/components/07_contact/ContactContent";
import MeetingSection from "@/components/home/MeetingSection";
import NewsSection from "@/components/home/NewsSection";
import HighlightSection from "@/components/home/HighlightSection";
import RegistrationModal from "@/components/ui/RegistrationModal";

import layoutStyles from "@/components/home/HomeLayout.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("history");

  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <HistoryContent />;
      case "vision":
        return <VisionContent />;
      case "course":
        return <CourseContent />;
      case "expertise":
        return <ExpertiseContent />;
      case "committee":
        return <CommitteeContent />;
      case "emblem":
        return <EmblemContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <HistoryContent />;
    }
  };

  return (
    <main>
      <Banner />
      <IntroSection />
      <div className={layoutStyles.container}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className={layoutStyles.contentArea}>
          {renderContent()}
        </div>
      </div>
      <HighlightSection />
      <MeetingSection />
      <NewsSection />
      <RegistrationModal />
    </main>
  );
}
