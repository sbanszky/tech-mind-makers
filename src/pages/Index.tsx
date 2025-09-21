import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProfileGrid } from "@/components/ProfileGrid";
import { SubstanceLibrary } from "@/components/SubstanceLibrary";
import { AnalysisSection } from "@/components/AnalysisSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("profiles");

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <HeroSection />
      
      <main className="container mx-auto">
        {activeSection === "profiles" && <ProfileGrid />}
        {activeSection === "substances" && <SubstanceLibrary />}
        {activeSection === "analysis" && <AnalysisSection />}
      </main>
    </div>
  );
};

export default Index;