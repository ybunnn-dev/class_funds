"use client";

import { Eye, Edit2, Search, Filter, ArrowUpDown } from "lucide-react";

export default function TransactionsTable() {
  return (
    <div className="col-span-1 xl:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      
      {/* Header Section with Search & Sort */}
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="font-semibold text-lg text-gray-800">Recent Transactions</h3>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search event or student..." 
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
            />
          </div>

          {/* Filter & Sort Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <ArrowUpDown size={16} />
              <span>Sort</span>
            </button>
          </div>

        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Event Name</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Due Date</th>
              <th className="px-6 py-3">Updated</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            
            {/* Row 1: PAID */}
            <tr className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4 font-medium text-gray-800">Christmas Party</td>
              <td className="px-6 py-4 font-medium text-gray-600">₱ 200.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                  Paid
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Dec 25, 2024</td>
              <td className="px-6 py-4 text-gray-400 text-xs">Dec 20, 2024</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                    <button title="View Event" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                        <Eye size={18} />
                    </button>
                    <button title="Update Status" className="p-1.5 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-md transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
              </td>
            </tr>

            {/* Row 2: PENDING */}
            <tr className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4 font-medium text-gray-800">Class T-Shirt</td>
              <td className="px-6 py-4 font-medium text-gray-600">₱ 350.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Jan 05, 2025</td>
              <td className="px-6 py-4 text-gray-400 text-xs">Dec 22, 2024</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                    <button title="View Event" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                        <Eye size={18} />
                    </button>
                    <button title="Update Status" className="p-1.5 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-md transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
              </td>
            </tr>

            {/* Row 3: OVERDUE */}
            <tr className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4 font-medium text-gray-800">Final Project Fund</td>
              <td className="px-6 py-4 font-medium text-gray-600">₱ 150.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200">
                  Overdue
                </span>
              </td>
              <td className="px-6 py-4 text-red-500 font-medium">Dec 15, 2024</td>
              <td className="px-6 py-4 text-gray-400 text-xs">Dec 10, 2024</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                    <button title="View Event" className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                        <Eye size={18} />
                    </button>
                    <button title="Update Status" className="p-1.5 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-md transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}