import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
