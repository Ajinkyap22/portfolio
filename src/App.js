import "./App.css";

import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import MobileNav from "./Components/MobileNav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projets from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    // add dark class to html element
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App dark:bg-primary">
      {/* navbar */}
      <Navbar />

      {/* mobile nav */}
      <MobileNav />

      {/* hero section */}
      <Hero />

      {/* about me */}
      <About />

      {/* tech stack */}
      <TechStack />

      {/* projects */}
      <Projets />

      {/* education */}
      <Education />

      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;
