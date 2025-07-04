import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';



const Mentors = () => {
  const mentors = [
    {
      name: 'Aditya Prasad',
      role: 'Full-Stack Developer',
      company: 'Build3X',
      expertise: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'WebRTC', 'GSAP', 'Firebase/Supabase', 'Linux', 'UI/UX', 'Figma', 'Blender', 'Android/iOS', 'REST APIs', 'Next.js', 'Express.js', 'Docker', 'Git/GitHub'
],
      image: 'https://media.licdn.com/dms/image/v2/D5603AQE_rz6g5ZgkKA/profile-displayphoto-shrink_200_200/B56ZXeRMJjHQAY-/0/1743190803655?e=1756944000&v=beta&t=iaM6u5DHYRxUK4lKfvrTzQo11jKTHM2c-6rLnHrCSdw',
      bio: 'Full-stack developer with 3+ years of experience building scalable applications.',
      social: {
        github: '#',
        linkedin: 'https://www.linkedin.com/in/sudo-aditya/',
        twitter: 'https://x.com/sudo_aditya'
      }
    },
    {
      name: 'Shresth Verma',
      role: 'DevOps & Backend Engineer',
      company: 'Build3X',
      expertise: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Redis', 'GraphQL', 'REST APIs', 'Microservices', 'Serverless Architecture',
        'PostgreSQL', 'Terraform','Jenkins','Load Balancing',
,],
      image: 'https://pbs.twimg.com/profile_images/1593100857671053312/2JtTMlNg_400x400.jpg',
      bio: 'Technical lead specializing in Backend Systems and Cloud Applications.',
      social: {
        github: 'https://github.com/shreverr',
        linkedin: 'https://www.linkedin.com/in/shreshth-verma/',
        twitter: 'https://x.com/shreshthverma'
      }
    },

    {
      name: 'Harshit Sharma',
      role: 'Full-Stack and Hardware Engineer',
      company: 'Build3X',
      expertise: ['React', 'Node.js', 'AppDev', 'Linux', 'Embedded Systems', 'Hardware Debugging', 'JWT', 'WebSockets', 'RESTful APIs','System Performance', 'OS Internals'],
      image: '/images/harshit.jpg', // Replace with actual image URL
      bio: 'Building custom PCs, exploring low-level systems, and tinkering with Linux for performance and optimization.',
      social: {
        github: 'https://github.com/githarsh94',
        linkedin: 'https://www.linkedin.com/in/harshit-sharma-5b1002168/',
        twitter: 'https://x.com/gamingtalent9'
      }
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from experienced developers who are passionate about helping you grow.
            Get personalized feedback, code reviews, and career guidance throughout the bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-black/50 rounded-2xl p-6 border border-teal-400/30 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="text-center mb-6">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-teal-400/40 group-hover:border-orange-400/60 transition-all duration-300"
                />
                <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-teal-400 font-semibold text-lg">{mentor.role}</p>
                <p className="text-orange-400 text-lg">{mentor.company}</p>
              </div>

              <p className="text-gray-300 text-lg mb-4 text-center">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {mentor.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-teal-400/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href={mentor.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={mentor.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={mentor.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;