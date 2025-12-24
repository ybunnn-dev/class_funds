"use client";

import { Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";

import ProfileCard from "./components/profile_card";
import ProgressCard from "./components/progress";
import TransactionsCard from "./components/transaction_table";

export default function StudentProfilePage() {
    const router = useRouter();
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text_heavy"><u onClick={() => router.back()} >IT - 4B</u> / <span>John Doe</span></h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
                <div className="col-span-1 grid grid-rows-2 gap-3">
                    <ProfileCard />
                    <ProgressCard />
                </div>
                <TransactionsCard />
            </div>
        </div>
    );
}