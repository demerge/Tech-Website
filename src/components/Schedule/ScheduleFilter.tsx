import React from 'react';

interface ScheduleFilterProps {
  activeDay: number;
  setActiveDay: (day: number) => void;
}

export default function ScheduleFilter({ activeDay, setActiveDay }: ScheduleFilterProps) {
  const days = ['Day 1', 'Day 2', 'Day 3'];

  return (
    <div className="flex space-x-4 mb-8">
      {days.map((day, index) => (
        <button
          key={day}
          onClick={() => setActiveDay(index)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeDay === index
              ? 'bg-blue-500 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
}