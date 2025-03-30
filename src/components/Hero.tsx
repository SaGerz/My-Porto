import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import samuelImage from "../Assets/Samuel.jpeg";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">Samuel Genaro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer</p>
            
            <div className="flex space-x-4 mb-8">
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
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
              <img 
                src={samuelImage} 
                alt="Samuel Genaro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;