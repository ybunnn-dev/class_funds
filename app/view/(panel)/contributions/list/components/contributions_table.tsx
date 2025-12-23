"use client";

import { Calendar, Search, Filter, ArrowUpDown } from "lucide-react";
import AddContributionModal from "../modals/add_contribution_modal";
import { useRouter } from "next/navigation";

export default function ContributionsTable() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      
      {/* UPDATED HEADER: Search, Filters, and Add Button */}
      <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h3 className="font-semibold text-text_heavy text-lg">Contribution Events</h3>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          
          {/* Search Bar */}
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search event..." 
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
            />
          </div>

          {/* Actions Group */}
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
              <Filter size={16} />
              <span className="hidden xl:inline">Filter</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
              <ArrowUpDown size={16} />
              <span className="hidden xl:inline">Sort</span>
            </button>
            
            {/* Add Contribution Modal */}
            <AddContributionModal />
          </div>

        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-text_light uppercase text-xs font-semibold">
            <tr>
                <th className="px-6 py-3">Contribution Name</th>
                <th className="px-6 py-3">Total Collected</th>
                <th className="px-6 py-3">Total Target</th>
                <th className="px-6 py-3">Amount / Head</th>
                <th className="px-6 py-3">Paid Ratio</th>
                <th className="px-6 py-3">Last Updated</th>
                <th className="px-6 py-3">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            
            <tr 
              onClick={() => router.push('../contributions/details')} // Example route
              className="hover:bg-gray-50/50 transition-colors cursor-pointer"
            >
              <td className="px-6 py-4 font-medium text-text_heavy">Christmas Party</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 8,400.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 9,000.00</td>
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

            <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-text_heavy">Class T-Shirt</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 3,000.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 13,500.00</td>
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

            <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-text_heavy">Midterm Printables</td>
              <td className="px-6 py-4 font-medium text-green-600">₱ 2,250.00</td>
              <td className="px-6 py-4 text-text_semi">₱ 2,250.00</td>
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