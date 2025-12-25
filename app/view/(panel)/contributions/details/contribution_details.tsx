"use client";

import { DollarSign , TrendingUp } from "lucide-react";
//import AddContributionModal from "../modals/add_contribution_modal";
import { useRouter } from "next/navigation";
import ContributionCard from "./components/contribution_detail_card";
import ContributionsCard from "./components/contributions_list";

export default function ContributionDetailPage() {
    const router = useRouter();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text_heavy"><u onClick={() => router.back()}>Contributions</u> / <span>Christmas Party</span></h2>
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
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
                </div>
                <div className="col-span-1 grid grid-cols-1 gap-3">
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
                    <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
                </div>
            </div>
            <ContributionsCard />
        </div>
    );
}