import React, {useEffect} from 'react';
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
      console.log('cursor=>',cursor)
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




// import React, {useEffect, useRef} from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     console.log('Cursor element:', cursor); // Debug log
    
//     if (cursor) {
//       const moveCursor = (e) => {
//         console.log('Mouse move:', e.clientX, e.clientY); // Debug log
//         cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
//       }

//       document.addEventListener('mousemove', moveCursor);
      
//       // Cleanup function
//       return () => {
//         document.removeEventListener('mousemove', moveCursor);
//       };
//     }
//   }, []);

//   return (
//     <div className="App bg-gray-50">
//       <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
      
//       {/* Custom Cursor */}
//       <div 
//         ref={cursorRef}
//         className="custom-cursor"
//         style={{
//           position: 'fixed',
//           left: 0,
//           top: 0,
//           width: '20px',
//           height: '20px',
//           backgroundColor: 'red', // Changed to red for visibility
//           borderRadius: '50%',
//           pointerEvents: 'none',
//           zIndex: 9999,
//           transform: 'translate3d(0, 0, 0)',
//           display: 'block' // Force display
//         }}
//       ></div>
//     </div>
//   );
// }

// export default App;