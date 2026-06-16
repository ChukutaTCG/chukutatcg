import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
