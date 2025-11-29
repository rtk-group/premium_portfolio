import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-black py-6 ">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Rohit Kumar</h3>
          <p className="text-gray-900 mb-8 max-w-md mx-auto">
            Full Stack Developer passionate about creating amazing web experiences
            and solving complex problems through code.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {[{ para: 'GitHub', link: 'https://github.com/rtk-group' }, { para: 'LinkedIn', link: 'https://www.linkedin.com/in/rohit-kumar-9ba48a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }, { para: 'Twitter', link: '#' }, { para: 'Instagram', link: '#' }].map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {platform.para}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-600 pt-4">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Rohit k. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;