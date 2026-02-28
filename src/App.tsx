import Scene from './components/3d/Scene';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Scene />
      <div className="content-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
