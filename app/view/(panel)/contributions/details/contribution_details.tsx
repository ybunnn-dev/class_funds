"use client";

import { Calendar, Search, Filter, ArrowUpDown } from "lucide-react";
//import AddContributionModal from "../modals/add_contribution_modal";
import { useRouter } from "next/navigation";
import ContributionCard from "./components/contribution_detail_card";

export default function ContributionDetailPage() {
  const router = useRouter();

  return(
    <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-text_heavy"><u onClick={() => router.back()}>Contributions</u> / <span>Christmas Party</span></h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
            <ContributionCard />
            <div className="col-span-1 grid grid-cols-1 gap-3">
                <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
                <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-3">
                <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
                <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"></div>
            </div>
        </div>
    </div>
  );
}