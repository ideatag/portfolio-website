import Navbar from "./components/navBar-section/Navbar";
import Intro from "./components/intro-section/Intro";
import Skills from "./components/skills-section/Skills";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer-section/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
