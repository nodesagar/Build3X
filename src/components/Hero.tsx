import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('/Teal and Orange Gradient Abstract Tech Conference Poster (3).png')`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Build3X
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl">Season 1</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A 3-week intensive <span className="text-teal-400 font-semibold">development bootcamp</span> where you'll receive
            weekly problem statements to build real-world projects. Learn, code, and grow with
            a community of passionate developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-orange-400">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">July 07 - 27, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-400">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Limited Cohort Size</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-400">
              <Trophy className="h-5 w-5" />
              <span className="font-semibold">Project Portfolio</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#register"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-orange-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Apply for S1
            </a>
            <a
              href="#curriculum"
              className="w-full sm:w-auto border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-400 hover:text-black transition-all duration-200">
              View Curriculum
            </a>
          </div>
        </div>

        {/* Weekly Modules */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { week: 'Week 1', date: 'July 7 - July 13', theme: 'Foundation Building' },
            { week: 'Week 2', date: 'July 14 - July 20', theme: 'Advanced Implementation' },
            { week: 'Week 3', date: 'July 21 - July 27', theme: 'Mega Project' },
          ].map((week, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-teal-400/30 hover:border-orange-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">{week.week}</h3>
              <p className="text-teal-400 font-semibold mb-2">{week.date}</p>
              <p className="text-gray-300">{week.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;