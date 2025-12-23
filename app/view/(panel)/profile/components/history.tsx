"use client";

import { Plus, Calendar } from "lucide-react";
//import AddContributionModal from "../modals/add_contribution_modal";

export default function HistoryTable() {
  return (
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
  );
}