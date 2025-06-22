import React from 'react';
import { Clock, Calendar, Users } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      name: 'Morning Power Yoga',
      time: '7:00 AM - 8:00 AM',
      day: 'Monday, Wednesday, Friday',
      instructor: 'Sarah Johnson',
      capacity: '15 people',
      level: 'All Levels'
    },
    {
      name: 'HIIT Bootcamp',
      time: '6:30 PM - 7:30 PM',
      day: 'Tuesday, Thursday',
      instructor: 'Mike Rodriguez',
      capacity: '20 people',
      level: 'Intermediate'
    },
    {
      name: 'Strength & Conditioning',
      time: '12:00 PM - 1:00 PM',
      day: 'Monday, Wednesday, Friday',
      instructor: 'Alex Chen',
      capacity: '12 people',
      level: 'Advanced'
    },
    {
      name: 'Cardio Dance',
      time: '5:00 PM - 6:00 PM',
      day: 'Monday, Tuesday, Thursday',
      instructor: 'Emma Davis',
      capacity: '25 people',
      level: 'All Levels'
    },
    {
      name: 'CrossFit Training',
      time: '8:00 AM - 9:00 AM',
      day: 'Tuesday, Thursday, Saturday',
      instructor: 'Ryan Wilson',
      capacity: '15 people',
      level: 'Intermediate'
    },
    {
      name: 'Pilates Core',
      time: '7:00 PM - 8:00 PM',
      day: 'Wednesday, Friday',
      instructor: 'Lisa Thompson',
      capacity: '18 people',
      level: 'All Levels'
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Class <span className="text-red-600">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our diverse range of fitness classes designed for all skill levels. 
            Book your spot and start your fitness journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{classItem.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  classItem.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  classItem.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  classItem.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {classItem.level}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">{classItem.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">{classItem.day}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">{classItem.capacity}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">
                  Instructor: <span className="font-semibold text-gray-900">{classItem.instructor}</span>
                </p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;