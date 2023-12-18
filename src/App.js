import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
