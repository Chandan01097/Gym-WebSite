import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="text-red-600 block">Body & Mind</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Join PowerFit and unlock your potential with expert trainers, cutting-edge equipment, 
          and a community that pushes you to be your best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center text-white text-lg font-semibold hover:text-red-400 transition-colors group">
            <div className="bg-white bg-opacity-20 p-4 rounded-full mr-3 group-hover:bg-opacity-30 transition-all">
              <Play className="h-6 w-6 ml-1" />
            </div>
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-sm md:text-base">Happy Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-sm md:text-base">Expert Trainers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm md:text-base">Gym Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;