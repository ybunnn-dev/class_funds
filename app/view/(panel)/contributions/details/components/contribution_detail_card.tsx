"use client";

import { Edit2 } from "lucide-react";
import Contribution from "../../../../svgs/contribution";

export default function ContributionProfileCard() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow row-span-1 flex flex-col items-center">
      <div className="w-30 h-30 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
        <Contribution />
      </div>

      <h1 className="text-xl font-bold text-text_heavy text-center">Christmas Party</h1>
      <h3 className="text-sm font-medium text-gray-500 mt-1 text-center">Ongoing</h3>
      <p className="text-xs text-gray-400 mt-1 mb-6 text-center">Created December 2024</p>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-text_heavy rounded-lg transition-colors font-medium">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200">
          <Edit2 size={14} className="text-text_light" />
        </div>
        Edit Event
      </button>

    </div>
  );
}