import React from 'react';
import { Calendar, User, MapPin, GraduationCap, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="John Doe working" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-xl font-bold">2+ Years</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-80 border-4 border-black rounded-lg -z-10 translate-x-6 translate-y-6"></div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-black" size={24} />
              <span>Who am I?</span>
            </h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              I'm Samuel Genaro, a passionate Full Stack Developer with expertise in building modern web applications. 
              I enjoy creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="mr-3 text-black" size={20} />
                <div>
                  <span className="font-semibold block">Date of Birth</span>
                  <span className="text-gray-700">January 1, 2002</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-3 text-black" size={20} />
                <div>
                  <span className="font-semibold block">Location</span>
                  <span className="text-gray-700">Jakarta, Indonesia</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="mr-3 text-black" size={20} />
                <div>
                  <span className="font-semibold block">Education</span>
                  <span className="text-gray-700">Computer Science</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="mr-3 text-black" size={20} />
                <div>
                  <span className="font-semibold block">Email</span>
                  <span className="text-gray-700">genarosamuel24@gmail.com</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              My journey in web development started with HTML, CSS, and JavaScript, and has evolved to include 
              modern frameworks and technologies like React, Node.js, and more. I'm dedicated to writing clean, 
              efficient code and creating intuitive user experiences.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;