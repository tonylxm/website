import CustomCursor from "./utils/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
