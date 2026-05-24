import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Areas from './components/Areas.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
