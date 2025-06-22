import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Yoga & Flexibility',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified yoga instructor specializing in Hatha and Vinyasa styles.',
      achievements: ['RYT-500 Certified', 'Nutrition Specialist', 'Mindfulness Coach']
    },
    {
      name: 'Mike Rodriguez',
      specialty: 'Strength & HIIT',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former professional athlete turned fitness coach with expertise in high-intensity training.',
      achievements: ['NASM Certified', 'Sports Performance', 'Olympic Lifting']
    },
    {
      name: 'Alex Chen',
      specialty: 'Powerlifting',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Competitive powerlifter and strength coach dedicated to helping clients reach their potential.',
      achievements: ['Powerlifting Champion', 'Strength Coach', 'Mobility Expert']
    },
    {
      name: 'Emma Davis',
      specialty: 'Dance & Cardio',
      experience: '6 years',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professional dancer and choreographer bringing fun and energy to fitness.',
      achievements: ['Dance Instructor', 'Zumba Certified', 'Group Fitness']
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-red-600">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certified professionals are here to guide, motivate, and help you 
            achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-4">
                      <button className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                        <Instagram className="h-4 w-4" />
                      </button>
                      <button className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                        <Facebook className="h-4 w-4" />
                      </button>
                      <button className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                        <Twitter className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-red-600 font-semibold mb-1">{trainer.specialty}</p>
                <p className="text-gray-600 text-sm mb-3">{trainer.experience} experience</p>
                <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                
                <div className="space-y-1">
                  {trainer.achievements.map((achievement, i) => (
                    <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-2 mb-2">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;