import CustomCursor from "@/utils/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <div>
      <div className="z-50">
        <CustomCursor />
      </div>
      <div className="relative z-0 bg-primary">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
