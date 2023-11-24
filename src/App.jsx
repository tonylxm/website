import { BrowserRouter } from "react-router-dom";

import { Hero, About, TechStack, Projects, Contact, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
