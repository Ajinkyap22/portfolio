import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import Projets from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

function Main() {
  return (
    <div>
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

export default Main;
