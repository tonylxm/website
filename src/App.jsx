import CustomCursor from "./utils/CustomCursor";
import {
  Hero,
  About,
  TechStack,
  Projects,
  Contact,
  Footer,
} from "./components";

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
