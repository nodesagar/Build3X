import React, { useState } from 'react';
import { User, Mail, Users, Code, CheckCircle } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  year: string;
  experience: string;
  preferredTrack: string;
  skills: string[];
  motivation: string;
  portfolio: string;
  availability: string;
  agreeTerms: boolean;
};

const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    year: '',
    experience: '',
    preferredTrack: '',
    skills: [],
    motivation: '',
    portfolio: '',
    availability: '',
    agreeTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const experienceLevels = [
    'Beginner (0-1 years)',
    'Intermediate (1-3 years)',
    'Advanced (3-5 years)',
    'Expert (5+ years)'
  ];

  const tracks = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Mobile Development',
    'DevOps & Cloud'
  ];

  const skillOptions = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Java', 'C++', 'Mobile Development',
    'Database Design', 'API Development', 'UI/UX Design', 'DevOps', 'Git/GitHub'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/50 rounded-2xl p-12 border border-teal-400/30">
            <CheckCircle className="h-16 w-16 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for applying to BuildX Season 1! We've received your application and will review it carefully. 
              You'll hear back from us within 3-5 business days with next steps.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-teal-400 to-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Apply for <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">BuildX S1</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join our first cohort of passionate developers ready to build, learn, and grow together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black/50 rounded-2xl p-8 border border-teal-400/30">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="h-6 w-6 text-teal-400 mr-2" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Background Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Background Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">University/Organization</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Current Status</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                >
                  <option value="">Select Status</option>
                  <option value="1st Year Student">1st Year Student</option>
                  <option value="2nd Year Student">2nd Year Student</option>
                  <option value="3rd Year Student">3rd Year Student</option>
                  <option value="4th Year Student">4th Year Student</option>
                  <option value="Graduate Student">Graduate Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Career Changer">Career Changer</option>
                </select>
              </div>
            </div>
          </div>

          {/* Technical Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="h-6 w-6 text-teal-400 mr-2" />
              Technical Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Programming Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                >
                  <option value="">Select Experience Level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Preferred Learning Track</label>
                <select
                  name="preferredTrack"
                  value={formData.preferredTrack}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                >
                  <option value="">Select Track</option>
                  {tracks.map(track => (
                    <option key={track} value={track}>{track}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">Technical Skills (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      formData.skills.includes(skill)
                        ? 'bg-teal-400/20 border-teal-400 text-teal-400'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-teal-400'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Portfolio/GitHub URL</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://github.com/yourusername"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Commitment & Availability */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Commitment & Availability</h3>
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">Time Availability *</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
              >
                <option value="">Select Availability</option>
                <option value="10-15 hours/week">10-15 hours per week</option>
                <option value="15-20 hours/week">15-20 hours per week</option>
                <option value="20+ hours/week">20+ hours per week</option>
                <option value="Full-time commitment">Full-time commitment</option>
              </select>
            </div>
          </div>

          {/* Motivation */}
          <div className="mb-8">
            <label className="block text-gray-300 font-medium mb-2">
              Why do you want to join BuildX Season 1? *
            </label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
              placeholder="Tell us about your goals, what you hope to learn, and how BuildX fits into your development journey..."
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400"
              />
              <span className="text-gray-300 text-sm">
                I agree to the terms and conditions and commit to actively participating in all three weeks of the bootcamp. 
                I understand this is a virtual program requiring dedicated time and effort. *
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-orange-400 text-black py-4 rounded-lg text-lg font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200 transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;