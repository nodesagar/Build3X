import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const curriculum = [
    {
      week: 'Week 0',
      // date: 'July 7 - July 13',
      title: 'Kick off & Basics',
      events: [
        { time: 'July 15, 3:00 PM', event: 'Introduction to the program, overview of tools and timelines. Problem statements released to all participants.', type: 'ceremony' },
        { time: 'July 15, 3:00 PM', event: 'Hands-on session to Javascript, Git, GitHub, React, Node.js, and other required libraries.', type: 'workshop' },
        { event: 'A warm-up coding task to ensure everyone is set up technically and understands the submission process.', type: 'mentoring' },
        { time: 'July 15, 3:00 PM', event: 'Submit your Week 1 foundation project (landing page, basic backend setup, or wireframe). Peer feedback begins.', type: 'deadline' },
      ]
    },
    {
      week: 'Week 1',
      // date: 'July 14 - July 20',
      title: 'Foundation Building',
      events: [
        {  event: 'Dive deep into frontend/backend architecture, database options, and API integration strategies.', type: 'ceremony' },
        { time: 'July 15, 3:00 PM', event: 'Topics include component-based architecture, responsive UI, API handling, and error handling.', type: 'workshop' },
        { time: 'July 17, 6:00 PM', event: 'Breakout mentor sessions for reviewing code structure, commit hygiene, and debugging techniques.', type: 'mentoring' },
        { time: 'July 20, 11:59 PM', event: 'Participants submit the MVP with basic functionality. Focus on frontend/backend working together.', type: 'deadline' },
      ]
    },
    {
      week: 'Week 2',
      // date: 'July 21 - July 27',
      title: 'Advanced Implementation',
      events: [
        { time: 'July 21, 10:00 AM', event:'Refine and finalize the problem statement with expected features and stretch goals.', type: 'ceremony' },
        { time: 'July 22, 2:00 PM', event: 'Learn how to present your project in demos. Cover storytelling, live demos, and GitHub portfolio tips.', type: 'workshop' },
        { time: 'July 24, 6:00 PM', event: 'One-on-one or group sessions on career advice, resumes, LinkedIn/GitHub cleanup, and project polishing.', type: 'mentoring' },
        { time: 'July 27, 2:00 PM', event: 'Participants present their final product. Judges give feedback.', type: 'deadline' },
      ]
    },

    {
      week: 'Week 3',
      // date: 'July 21 - July 27',
      title: 'Final Hackathon',
      events: [
        { time: 'July 21, 10:00 AM', event: 'Official start of the week-long hackathon. Final briefing, judging criteria explained. Clear expectations set for deliverables and checkpoints.', type: 'ceremony' },
        { time: 'July 22, 2:00 PM', event: 'Mid-hackathon review session. Mentors provide feedback on current builds, unblock teams on technical issues, and offer advice on scalability, UX, and code quality.', type: 'workshop' },
        { time: 'July 24, 6:00 PM', event: 'Teams focus on debugging, optimizing performance, writing documentation, and packaging their projects for final submission. Submit projects via the portal (with GitHub + demo links).', type: 'mentoring' },
        { time: 'July 27, 2:00 PM', event: 'Each team presents their solution live or via recorded demo. Judges review and score projects. Winners announced, awards distributed, and the bootcamp officially closes with team shoutouts', type: 'deadline' },
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'bg-orange-400/20 text-orange-400 border-orange-400/40';
      case 'workshop': return 'bg-teal-400/20 text-teal-400 border-teal-400/40';
      case 'mentoring': return 'bg-purple-400/20 text-purple-400 border-purple-400/40';
      case 'deadline': return 'bg-red-400/20 text-red-400 border-red-400/40';
      default: return 'bg-gray-400/20 text-gray-400 border-gray-400/40';
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bootcamp <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zero three weeks of structured learning with progressive challenges. Each week builds upon the previous,
            culminating in a comprehensive portfolio project.
          </p>
        </div>

        <div className="space-y-12">
          {curriculum.map((week, weekIndex) => (
            <div key={weekIndex} className="bg-gray-900/50 rounded-2xl p-8 border border-teal-400/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{week.week}</h3>
                  {/* <p className="text-teal-400 font-semibold text-lg">{week.date}</p> */}
                  <p className="text-teal-400 text-lg font-medium">{week.title}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="h-5 w-5" />
                    <span>Virtual Sessions</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {week.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={`p-4 rounded-lg border ${getEventTypeColor(event.type)}`}>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        {/* <p className="font-semibold mb-1">{event.time}</p> */}
                        <p className="text-s opacity-90">{event.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-400/10 to-orange-400/10 rounded-2xl p-8 border border-teal-400/30">
            <Calendar className="h-12 w-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              All sessions are conducted virtually with recorded content available for review.
              Participants receive detailed schedules and meeting links upon enrollment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;