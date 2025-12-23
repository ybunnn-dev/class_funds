"use client";

import { DollarSign, TrendingUp, TrendingDown, Wallet, PieChart, Users } from "lucide-react";
import ClassTable from "./components/class_table";

export default function ClassListPage() {
  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text_heavy">Class List | IT-4B</h2>
          <p className="text-text_light text-sm mt-1">
            Manage and track all student payments and class funds.
          </p>
        </div>
        {/* Optional: Add Filter/Export buttons here later */}
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Collected */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text_light">Total Students</p>
              <h3 className="text-2xl font-bold text-text_heavy mt-1">40</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 text-xs text-text_light">
            Last Updated March 17, 2025
          </div>
        </div>

        {/* Card 2: Pending Payments */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text_light">Complete Contributions</p>
              <h3 className="text-2xl font-bold text-text_heavy mt-1">40</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
              <PieChart size={20} />
            </div>
          </div>
          <div className="mt-4 text-xs text-text_light">
            5 students remaining
          </div>
        </div>

        {/* Card 3: Expenses (Contextual) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text_light">With Pending Contributions</p>
              <h3 className="text-2xl font-bold text-text_heavy mt-1">5</h3>
            </div>
            <div className="p-3 bg-red-100 rounded-full text-red-500">
              <TrendingDown size={20} />
            </div>
          </div>
          <div className="mt-4 text-xs text-text_light">
            5 students over due
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <ClassTable />
    </div>
  );
}