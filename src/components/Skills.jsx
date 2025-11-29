import React from 'react';
import { assets } from '../assets/assets';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills"  className="section-padding py-15 " style={{
            backgroundImage: `url(${assets.sec2_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
      <div className="container mx-auto px-3">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">{category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="glass-effect p-6 rounded-xl shadow-xl hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-white font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-primary to-gray-700 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;