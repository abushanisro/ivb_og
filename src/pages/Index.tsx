import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StartupDirectory from "@/components/StartupDirectory";
import Footer from "@/components/Footer";
import ThreeBulbBackground from "@/components/ThreeBulbBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThreeBulbBackground />
      <Header />
      <HeroSection />
      <StartupDirectory />
      <Footer />
    </div>
  );
};

export default Index;
