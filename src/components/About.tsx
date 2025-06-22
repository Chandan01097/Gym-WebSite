import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented Training',
      description: 'Personalized workout plans designed to help you achieve your specific fitness goals.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a supportive community of fitness enthusiasts who motivate each other.'
    },
    {
      icon: Award,
      title: 'Expert Trainers',
      description: 'Learn from certified professionals with years of experience in fitness training.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'We focus on your complete well-being, not just physical fitness.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gym interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-red-600">PowerFit?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At PowerFit, we believe fitness is a journey, not a destination. Our state-of-the-art 
              facility combined with expert guidance creates the perfect environment for transformation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;