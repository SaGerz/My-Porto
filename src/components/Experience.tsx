import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-black after:border-2 after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute sm:left-0 sm:ml-2 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-black rounded-full">Present</time>
              <div className="text-xl font-bold text-black">Programmer Intern</div>
            </div>
            <div className="text-gray-500 mb-2">PT Inti Anugerah Teknologi Indonesia • October 2024 - Present</div>
            <div className="text-gray-700">
              <p className="mb-2">
                Currently working as a programmer intern, contributing to various projects and gaining hands-on experience in a professional development environment.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Developing and maintaining web applications using modern technologies</li>
                <li>Collaborating with senior developers on feature implementation</li>
                <li>Participating in code reviews and improving coding practices</li>
                <li>Learning industry-standard development workflows and methodologies</li>
              </ul>
            </div>
          </div>
          
          {/* You can add more experience items here in the future */}
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700">
              <Briefcase size={18} className="mr-2" />
              <span>More experiences coming soon!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;