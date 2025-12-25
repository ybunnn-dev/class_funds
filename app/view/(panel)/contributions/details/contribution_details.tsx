"use client";

import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Receipt, 
  Wallet,
  ArrowUpRight 
} from "lucide-react";
import { useRouter } from "next/navigation";
import ContributionCard from "./components/contribution_detail_card";
import ContributionsCard from "./components/contributions_list";

export default function ContributionDetailPage() {
    const router = useRouter();

    // Mock Data for "Paid Ratio" logic
    const paidCount = 42;
    const totalMembers = 45;
    const percentage = Math.round((paidCount / totalMembers) * 100);

    // Determine Colors based on logic provided (100% Blue, High Green, Low Yellow)
    let progressColor = "bg-yellow-500";
    let badgeColor = "bg-yellow-100 text-yellow-800";
    
    if (percentage === 100) {
        progressColor = "bg-blue-500";
        badgeColor = "bg-blue-100 text-blue-800";
    } else if (percentage >= 50) {
        progressColor = "bg-green-500";
        badgeColor = "bg-green-100 text-green-800";
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text_heavy">
                    <span 
                        onClick={() => router.back()} 
                        className="cursor-pointer hover:underline text-text_light hover:text-text_heavy transition-colors"
                    >
                        Contributions
                    </span> 
                    <span className="text-gray-400 mx-2">/</span> 
                    <span>Christmas Party</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
                <ContributionCard />
                <div className="col-span-1 grid grid-cols-1 gap-3">
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm font-medium text-text_light">Paid Ratio</p>
                                <h3 className="text-2xl font-bold text-text_heavy mt-1">{percentage}%</h3>
                            </div>
                            <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                <Users size={24} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium">
                                <span className={`${badgeColor} px-2.5 py-0.5 rounded-full`}>
                                    {paidCount}/{totalMembers} Members
                                </span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${progressColor} transition-all duration-500`} 
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-1 gap-3">
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-text_light">Total Expenses</p>
                                <h3 className="text-2xl font-bold text-text_heavy mt-1">₱ 8,400.00</h3>
                            </div>
                            <div className="p-3 bg-red-100 rounded-full text-red-600">
                                <Receipt size={24} />
                            </div>
                        </div>
                         <div className="mt-4 flex items-center text-xs text-text_light font-medium">
                            <span className="text-text_light">Used for venue & food</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-text_light">Net Balance</p>
                                <h3 className="text-2xl font-bold text-text_heavy mt-1">₱ 6,850.00</h3>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <Wallet size={24} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-xs text-blue-600 font-medium">
                             <ArrowUpRight size={14} className="mr-1" />
                             Available Funds
                        </div>
                    </div>
                </div>
            </div>
            <ContributionsCard />
        </div>
    );
}