import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'rtkdevloper@gmail.com',
      link: 'mailto:rtkdevloper@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91 (969) 010-3443',
      link: 'tel:+919690103443'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Kosi Kalan (Mathura)',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-[url('sec4_bg.jpg')] text-white bg-center bg-cover py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Let's talk about your project</h3>
              <p className="text-white mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, I'll get back to you!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 glass-effect rounded-xl group"
                  >
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-400">{item.title}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {[{icon: <FaGithub />, link:'https://github.com/rtk-group'}, {icon: <FaLinkedin />, link:'https://www.linkedin.com/in/rohit-kumar-9ba48a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}, {icon: <FaTwitterSquare />, link:'#'}].map((platform) => (
                  <a
                    key={platform}
                    href={platform.link}
                    className="border rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all"
                  >
                    <span className='text-3xl p-2 text-white'>{platform.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-white"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                <button
                  type="submit"
                  className=" py-1 px-5 text-white hover:bg-white/50 rounded-lg cursor-pointer bg-white/30"
                >
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;