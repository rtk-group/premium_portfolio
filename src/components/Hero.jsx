import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    // <section id="home" className={`min-h-screen bg-[url(${assets.sec1_img})] flex items-center justify-center section-padding`}>
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${assets.sec1_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* <div className="absolute inset-0 border border-2 border z-0 min-h-full">
      <img src={assets.sec1_img} alt="hero_image" className='w-full h-full object-cover '/>
      </div> */}

      <div className="container z-2 mx-auto px-6 h-full">
        <div className="max-w-7xl mx-auto text-white flex flex-col items-end">
          <div className="w-30 h-30 mb-2 rounded-full bg-gradient-to-r from-primary to-black flex items-center justify-center text-white text-4xl font-bold">
            RTK
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            Rohit <span className="text-primary">Kumar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-center">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          
          <p className="text-xl mb-12 max-w-2xl text-center leading-relaxed">
            I create beautiful, functional, and user-friendly web applications 
            that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
          
          <div className="mt-10 animate-bounce">
            <a href="#about" className="text-gray-200 hover:text-primary transition-colors">
              <svg className="w-12 h-12 p-2 rounded-full mx-auto border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;