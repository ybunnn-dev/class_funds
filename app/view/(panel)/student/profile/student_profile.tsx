"use client";

import { Edit2 } from "lucide-react";

import ProfileCard from "./components/profile_card";

export default function StudentProfilePage() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
            <div className="col-span-1 grid grid-rows-5 gap-3">
                <ProfileCard />
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow row-span-1"></div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow row-span-1"></div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow row-span-1"></div>
            </div>
            <div className="col-span-1 xl:col-span-3 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">

            </div>
        </div>
    );
}