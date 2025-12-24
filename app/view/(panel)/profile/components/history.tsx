"use client";

import { Calendar, Search, Filter, ArrowUpDown } from "lucide-react";

export default function HistoryTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h3 className="font-semibold text-text_heavy text-lg">Recent Transactions</h3>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search transaction..." 
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
              <Filter size={16} />
              <span className="hidden xl:inline">Filter</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
              <ArrowUpDown size={16} />
              <span className="hidden xl:inline">Sort</span>
            </button>
          </div>

        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-text_light uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Sample Row 1 */}
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-4 font-medium text-text_heavy">Maria Santos</td>
              <td className="px-6 py-4 text-text_semi">Christmas Party Contribution</td>
              <td className="px-6 py-4 text-text_light">Dec 20, 2024</td>
              <td className="px-6 py-4 font-medium text-green-600">+ ₱ 200.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-4 font-medium text-text_heavy">Class Treasurer</td>
              <td className="px-6 py-4 text-text_semi">Photocopy Paper Purchase</td>
              <td className="px-6 py-4 text-text_light">Dec 18, 2024</td>
              <td className="px-6 py-4 font-medium text-red-500">- ₱ 150.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Expense
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-4 font-medium text-text_heavy">Pedro Penduko</td>
              <td className="px-6 py-4 text-text_semi">Late Penalty</td>
              <td className="px-6 py-4 text-text_light">Dec 15, 2024</td>
              <td className="px-6 py-4 font-medium text-green-600">+ ₱ 50.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}