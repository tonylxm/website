import { BrowserRouter } from "react-router-dom";

import { Intro, About, TechStack, Projects, Contact } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patern bg-cover bg-no-repeat bg-center">
          <Intro />
        </div>
        <About />
        <TechStack />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
