"use client";

import { DollarSign, TrendingUp, TrendingDown, Users, Wallet } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION */}
      <div>
        <h2 className="text-2xl font-bold text-text_heavy">Overview</h2>
        <p className="text-text_light text-sm mt-1">
          Welcome back, <span className="font-semibold text-light_brown">Juan Cruz</span>. Here's what's happening with your class funds.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Collected */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text_light">Total Collected</p>
              <h3 className="text-2xl font-bold text-text_heavy mt-1">₱ 15,250.00</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <DollarSign size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
            <TrendingUp size={14} className="mr-1" />
            +12% from last month
          </div>
        </div>

        {/* Card 2: Expenses */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text_light">Total Expenses</p>
              <h3 className="text-2xl font-bold text-text_heavy mt-1">₱ 4,100.00</h3>
            </div>
            <div className="p-3 bg-red-100 rounded-full text-red-500">
              <TrendingDown size={24} />
            </div>
          </div>
          <div className="mt-4 text-xs text-text_light">
            Printing & Event materials
          </div>
        </div>

        {/* Card 3: Current Balance */}
        <div className="bg-gradient-to-br from-text_heavy to-text_semi p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Current Balance</p>
              <h3 className="text-3xl font-bold mt-1">₱ 11,150.00</h3>
            </div>
            <div className="p-3 bg-white/20 rounded-full text-white backdrop-blur-sm">
              <Wallet size={24} />
            </div>
          </div>
          <div className="mt-4 text-xs opacity-80">
            Available for withdrawal
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS TABLE */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-text_heavy">Recent Transactions</h3>
          <button className="text-sm text-light_brown font-medium hover:underline">View All</button>
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
              {/* Sample Row 2 */}
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
              {/* Sample Row 3 */}
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
    </div>
  );
}