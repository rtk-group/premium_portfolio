import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const cursor = document.querySelector('.my-cursor');
    if (cursor) {

      const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      const hoverElements = document.querySelectorAll('p, li, a, span, h1, h2, h3');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
          cursor.classList.add('large');
        });

        element.addEventListener('mouseleave', function () {
          cursor.classList.remove('large');
        });
      });

      document.addEventListener('mousemove', moveCursor);
      return () => document.removeEventListener('mousemove', moveCursor);
    }
  }, []);

  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div className="border outline-none border-white hidden z-5 sm:block fixed my-cursor bg-black flex justify-center items-center rounded-full mix-blend-difference pointer-events-none"></div>
    </div>
  );
}

export default App;
