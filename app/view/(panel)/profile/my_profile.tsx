"use client";

import { DollarSign, Wallet, Users, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import HistoryTable from "./components/history";
import ProfileCard from './components/profile_card';

interface UserProfile {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  email: string;
  createdAt: string;
  section: {
    name: string;
  } | null;
}

export default function ProfilePage() {
    const { data: session } = useSession();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session?.user) {
            fetch("/api/profile")
                .then(async (res) => {
                    // 1. Check if the status is NOT 200 OK
                    if (!res.ok) {
                        const text = await res.text(); // Read the raw text (might be an HTML error page)
                        throw new Error(`Server returned ${res.status}: ${text}`);
                    }
                    // 2. If it is 200, parse as JSON
                    return res.json();
                })
                .then((data) => {
                    setProfile(data);
                    setLoading(false);
                })
                .catch((err) => {
                    // 3. Look at your browser console now!
                    console.error("DEBUGGING PROFILE FETCH:", err); 
                    setLoading(false);
                });
        }
    }, [session]);

    if (loading) {
        return <div className="p-6 text-text_light animate-pulse">Loading profile data...</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-6">
            <ProfileCard data={profile} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <HistoryTable />
        </div>
    )
}