
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 text-white font-sans relative">
      <NeuralNetworkBackground />
      <Navbar />
      <main className="relative z-10 block">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
