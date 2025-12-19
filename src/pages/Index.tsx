import Navigation from "@/components/portfolio/Navigation";
import TitleSection from "@/components/portfolio/TitleSection";
import IdentitySection from "@/components/portfolio/IdentitySection";
import DeclarationSection from "@/components/portfolio/DeclarationSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import IntroLetterSection from "@/components/portfolio/IntroLetterSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import PriorLearningSection from "@/components/portfolio/PriorLearningSection";
import GallerySection from "@/components/portfolio/GallerySection";
import RPLCriteriaSection from "@/components/portfolio/RPLCriteriaSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <TitleSection />
        <IdentitySection />
        <DeclarationSection />
        <CaseStudiesSection />
        <IntroLetterSection />
        <ResumeSection />
        <PriorLearningSection />
        <GallerySection />
        <RPLCriteriaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
