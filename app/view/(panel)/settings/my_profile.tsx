"use client";

import { DollarSign, TrendingUp, TrendingDown, Wallet, PieChart } from "lucide-react";
import HistoryTable from "./components/history";
import ProfileCard from './components/profile_card';

export default function ProfilePage(){
    return(
        <div className="grid grid-row gap-3">
            <ProfileCard />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm col-span-1 h-40">

                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm col-span-1 h-40">

                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm col-span-1 h-40">

                </div>
            </div>
            <HistoryTable />
        </div>
    )
}

