import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Samuel Genaro</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://github.com/SaGerz" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://id.linkedin.com/in/samuelgenaro" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:genarosamuel24@gmail.com" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Samuel Genaro. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <nav className="flex flex-wrap justify-center space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white mb-2">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white mb-2">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white mb-2">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white mb-2">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white mb-2">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white mb-2">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;