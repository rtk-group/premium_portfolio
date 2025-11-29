import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <section id="about" className="section-padding py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='flex justify-center'>
              <img 
                src={assets.logo2} 
                alt="About Me" 
                className="rounded-2xl shadow-2xl w-110 rounded-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Crafting Digital Experiences That Matter
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating web applications that are both beautiful and functional. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge 
                through blog posts and tutorials.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Node.js & Express</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">MongoDB & SQL</span>
                </div>
              </div>
              
              <a href="#contact" className="btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;