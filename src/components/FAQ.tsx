import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can join BuildX Season 1?',
      answer: 'BuildX S1 is open to developers of all skill levels who are committed to learning and building projects. Whether you\'re a beginner looking to build your first portfolio or an intermediate developer wanting to enhance your skills, our bootcamp is designed to help you grow.'
    },
    {
      question: 'How does the 3-week bootcamp structure work?',
      answer: 'Each week focuses on a specific learning objective with a unique problem statement. You\'ll have one week to understand the requirements, plan your approach, and build a functional project. This progressive structure ensures continuous learning and skill development.'
    },
    {
      question: 'Is this bootcamp completely virtual?',
      answer: 'Yes, BuildX Season 1 is a fully virtual bootcamp. All workshops, mentor sessions, and presentations are conducted online, making it accessible to participants worldwide. We provide all necessary tools and platforms for effective remote learning.'
    },
    {
      question: 'What kind of projects will I build?',
      answer: 'Projects are designed to be practical and portfolio-worthy, covering various aspects of modern development. Each week\'s problem statement focuses on different skills - from frontend development and API integration to full-stack applications and deployment.'
    },
    {
      question: 'Do I need to participate in all three weeks?',
      answer: 'Yes, BuildX is designed as a cohesive 3-week program where each week builds upon the previous. Full participation ensures you get the complete learning experience and build a comprehensive portfolio of projects.'
    },
    {
      question: 'What technologies and tools should I know?',
      answer: 'Basic knowledge of HTML, CSS, and JavaScript is recommended. We\'ll cover modern frameworks and tools during the bootcamp. A willingness to learn and adapt to new technologies is more important than knowing everything upfront.'
    },
    {
      question: 'How are projects evaluated and feedback provided?',
      answer: 'Projects are reviewed by our mentors based on functionality, code quality, and problem-solving approach. You\'ll receive detailed feedback through code reviews, one-on-one sessions, and group discussions to help you improve continuously.'
    },
    {
      question: 'What support is available during the bootcamp?',
      answer: 'You\'ll have access to experienced mentors, peer support through our community, technical workshops, and regular office hours. Our mentors provide code reviews, answer questions, and offer career guidance throughout the program.'
    },
    {
      question: 'Will I receive a certificate upon completion?',
      answer: 'Yes! Participants who successfully complete all three weeks and submit their projects will receive a BuildX Season 1 completion certificate, along with a portfolio of projects to showcase to potential employers.'
    },
    {
      question: 'How do I apply and what\'s the selection process?',
      answer: 'Applications are open now through our registration form. We review applications based on motivation, commitment, and basic technical readiness. Due to limited cohort size, we encourage early applications to secure your spot in Season 1.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about BuildX Season 1 bootcamp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg border border-teal-400/30 hover:border-orange-400/50 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-teal-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-teal-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-400/10 to-orange-400/10 rounded-2xl p-8 border border-teal-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you with any additional questions about the bootcamp.
            </p>
            <button className="bg-gradient-to-r from-teal-400 to-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:from-teal-300 hover:to-orange-300 transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;