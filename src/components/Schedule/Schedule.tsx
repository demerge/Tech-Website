import React, { useState } from 'react';
import ScheduleCard from './ScheduleCard';
import ScheduleFilter from './ScheduleFilter';

const scheduleData = [
  {
    day: 0,
    events: [
      {
        time: '9:00 AM',
        title: 'Future of AI in Enterprise',
        speaker: 'Dr. Sarah Chen',
        location: 'Main Hall',
        category: 'keynote'
      },
      {
        time: '11:00 AM',
        title: 'Building Scalable Systems',
        speaker: 'James Wilson',
        location: 'Workshop Room A',
        category: 'workshop'
      },
      {
        time: '2:00 PM',
        title: 'Emerging Tech Trends',
        speaker: 'Panel Discussion',
        location: 'Conference Room B',
        category: 'panel'
      }
    ]
  },
  {
    day: 1,
    events: [
      {
        time: '9:30 AM',
        title: 'Web3 and the Future of Internet',
        speaker: 'Michael Chang',
        location: 'Main Hall',
        category: 'keynote'
      },
      {
        time: '11:30 AM',
        title: 'Cloud Native Architecture',
        speaker: 'Emily Rodriguez',
        location: 'Workshop Room B',
        category: 'workshop'
      }
    ]
  },
  {
    day: 2,
    events: [
      {
        time: '10:00 AM',
        title: 'Quantum Computing Revolution',
        speaker: 'Dr. Alex Kumar',
        location: 'Main Hall',
        category: 'keynote'
      },
      {
        time: '1:00 PM',
        title: 'Future of Work',
        speaker: 'Panel Discussion',
        location: 'Conference Room A',
        category: 'panel'
      }
    ]
  }
] as const;

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Conference Schedule</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Explore our carefully curated sessions featuring industry leaders and innovative workshops
          </p>
        </div>

        <ScheduleFilter activeDay={activeDay} setActiveDay={setActiveDay} />

        <div className="grid gap-6">
          {scheduleData[activeDay].events.map((event, index) => (
            <ScheduleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}