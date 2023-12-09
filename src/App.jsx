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

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="relative z-0 bg-primary">
        <Hero />
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
