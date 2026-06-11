import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Attorneys from './sections/Attorneys';
import PracticeAreas from './sections/PracticeAreas';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Chatbot from './sections/Chatbot';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-[#c9a84c] selection:text-slate-950">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Attorneys />
        <PracticeAreas />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;