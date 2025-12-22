"use client";

import { Plus, Calendar } from "lucide-react";

export default function ContributionsTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Table Header with Add Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-text_heavy">Contribution Events</h3>
        <button className="flex items-center gap-2 bg-text_heavy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <Plus size={16} />
          Add Contribution
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-text_light uppercase text-xs font-semibold">
            <tr>
                <th className="px-6 py-3">Contribution Name</th>
                <th className="px-6 py-3">Total Collected</th>
                <th className="px-6 py-3">Total Target</th> {/* New Column */}
                <th className="px-6 py-3">Amount / Head</th>
                <th className="px-6 py-3">Paid Ratio</th>
                <th className="px-6 py-3">Last Updated</th>
                <th className="px-6 py-3">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            
            {/* Row 1: Active/Healthy Contribution */}
            <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-text_heavy">Christmas Party</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 8,400.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 9,000.00</td> {/* Target */}
              <td className="px-6 py-4 text-text_semi">₱ 200.00</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    42/45
                  </span>
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[93%]"></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-text_light">Dec 20, 2024</td>
              <td className="px-6 py-4 text-text_semi flex items-center gap-1">
                <Calendar size={14} className="text-text_light" />
                Dec 22, 2024
              </td>
            </tr>

            {/* Row 2: Low Participation */}
            <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-text_heavy">Class T-Shirt</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 3,000.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 13,500.00</td> {/* Target */}
              <td className="px-6 py-4 text-text_semi">₱ 300.00</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    10/45
                  </span>
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[22%]"></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-text_light">Dec 18, 2024</td>
              <td className="px-6 py-4 text-text_semi flex items-center gap-1">
                <Calendar size={14} className="text-text_light" />
                Jan 15, 2025
              </td>
            </tr>

             {/* Row 3: Completed/Past */}
            <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-text_heavy">Midterm Printables</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 2,250.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 2,250.00</td> {/* Target */}
              <td className="px-6 py-4 text-text_semi">₱ 50.00</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    45/45
                  </span>
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[100%]"></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-text_light">Oct 15, 2024</td>
              <td className="px-6 py-4 text-text_light line-through flex items-center gap-1">
                <Calendar size={14} />
                Oct 10, 2024
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-text_light">Showing 3 active contributions</span>
          <div className="flex gap-2">
            <button className="text-xs font-medium text-text_semi hover:text-text_heavy disabled:opacity-50">Previous</button>
            <button className="text-xs font-medium text-text_semi hover:text-text_heavy">Next</button>
          </div>
      </div>
    </div>
  );
}