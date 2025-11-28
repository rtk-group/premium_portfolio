import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full glass-effect z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-secondary">
            <img src={'/logo1.jpg'} className='w-35' alt="logo of rtk_group" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 relative after:content-[''] after:absolute after:bg-black after:-bottom-1 after:rounded-full after:left-0 after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-in-out hover:text-primary-500 font-medium transition-colors duration-300" >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        <div className="md:hidden ">
          <div className={`flex flex-col space-y-4 ${isMenuOpen ? 'mt-4 py-4 border-t border-gray-200' : 'h-0'} duration-300 overflow-hidden`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-primary font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;