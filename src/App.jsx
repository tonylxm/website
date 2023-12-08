import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./utils/CustomCursor";
import {
  Hero,
  About,
  TechStack,
  Projects,
  Contact,
  Footer,
} from "./components";
import StarrySky from "./components/StarrySky";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <TechStack />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
      <CustomCursor />
    </BrowserRouter>
  );
};

export default App;
