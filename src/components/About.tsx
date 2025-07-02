import React from 'react';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Weekly Problem Statements',
      description: 'Each week presents a carefully crafted challenge designed to enhance your development skills and portfolio.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Build Real Projects',
      description: 'Create functional applications that solve real problems and demonstrate your technical capabilities.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Learning',
      description: 'Learn alongside fellow developers and receive guidance from experienced mentors throughout your journey.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Portfolio Development',
      description: 'Build a strong portfolio of projects that showcase your skills to potential employers.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Build3X</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build3X is an intensive development bootcamp designed to accelerate your coding journey. 
            Season 1 brings together aspiring developers for three weeks of structured learning and project building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/50 rounded-lg p-6 border border-teal-400/30 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="text-teal-400 group-hover:text-orange-400 transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-400/10 to-orange-400/10 rounded-2xl p-8 border border-teal-400/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Open to developers ready to level up their skills!
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you're a beginner looking to build your first projects or an intermediate developer 
                wanting to expand your portfolio, Build3X Season 1 provides the structure and support you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-teal-400/20 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Beginner Friendly
                </span>
                <span className="bg-orange-400/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Mentor Support
                </span>
                <span className="bg-teal-400/20 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Virtual Bootcamp
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-xl text-white font-semibold mb-2">Weeks of Intensive Learning</div>
              <div className="text-gray-300">July 7 - July 27, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;