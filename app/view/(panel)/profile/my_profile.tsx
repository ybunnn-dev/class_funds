"use client";

import { DollarSign, Wallet, Users, CalendarCheck } from "lucide-react";
import HistoryTable from "./components/history";
import ProfileCard from './components/profile_card';

export default function ProfilePage() {
    return (
        <div className="grid grid-cols-1 gap-6">
            
            {/* Top Profile Section */}
            <ProfileCard />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1: Total Students */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Students</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">40</h3>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                        <span>+12 this month</span>
                    </div>
                </div>

                {/* Card 2: Cash on Hand */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Cash on Hand</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">₱ 45,231.50</h3>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg text-green-600">
                            <Wallet className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400 mt-2">
                        <span>Updated just now</span>
                    </div>
                </div>

                {/* Card 3: Contribution Events (Progress) */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Contribution Events</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">
                                40 <span className="text-xl text-gray-400 font-normal">/ 50</span>
                            </h3>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg text-purple_light">
                            <CalendarCheck className="w-6 h-6" />
                        </div>
                    </div>
                    
                    {/* Progress Bar Section */}
                    <div className="w-full mt-auto">
                        <div className="flex justify-between text-xs mb-1 text-gray-500">
                            <span>Completion Rate</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div 
                                className="bg-purple_light h-2.5 rounded-full" 
                                style={{ width: '80%' }}
                            ></div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom History Table */}
            <HistoryTable />
        </div>
    )
}