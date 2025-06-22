import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jessica Williams',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'PowerFit transformed my life completely. The trainers are amazing and the community is so supportive. I\'ve never felt stronger or more confident!'
    },
    {
      name: 'David Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'As someone who works long hours, finding time for fitness was challenging. PowerFit\'s flexible schedule and expert guidance made it possible for me to stay consistent.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The variety of classes and personalized attention I receive at PowerFit keeps me motivated. I\'ve achieved goals I never thought possible!'
    },
    {
      name: 'Robert Johnson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'PowerFit isn\'t just a gym, it\'s a lifestyle. The holistic approach to fitness and wellness has improved every aspect of my life.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-red-600 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-yellow-300">Members Say</span>
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives at PowerFit.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-2xl">
            <Quote className="h-12 w-12 text-red-600 mb-6" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-xl text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-red-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-red-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;