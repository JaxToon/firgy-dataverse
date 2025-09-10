import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
