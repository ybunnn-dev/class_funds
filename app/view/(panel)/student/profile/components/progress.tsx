"use client";

import { CalendarCheck } from "lucide-react";

export default function ProgressTrack() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow row-span-1 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm font-medium text-gray-500">Paid Contributions</p>
          <p className="text-xs text-green-600 font-medium mt-1">+2 this week</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-lg text-purple_light">
          <CalendarCheck className="w-6 h-6" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative py-4">
        <svg width="180" height="180" viewBox="0 0 180 180" className="transform -rotate-90">
          <circle
            cx="90"
            cy="90"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-gray-100"
          />
          <circle
            cx="90"
            cy="90"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeLinecap="round"
            className="text-purple_light"
            strokeDasharray={2 * Math.PI * 80} // ~502.65
            strokeDashoffset={2 * Math.PI * 80 * (1 - 0.8)} // 80% filled
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-gray-800">
            40 <span className="text-xl text-gray-400 font-normal">/ 50</span>
          </span>
          <span className="text-xs font-medium text-gray-400 mt-1">Events</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-50">
        <span className="text-gray-500">Completion Rate</span>
        <span className="font-semibold text-gray-700">80%</span>
      </div>

    </div>
  );
}