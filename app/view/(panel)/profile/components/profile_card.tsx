"use client";

import { Plus, Calendar } from "lucide-react";
import MaleProfile from "../../../svgs/male_profile";
import UpdateProfileModal from "../modals/update_details";

interface ProfileCardProps {
  data: {
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
  } | null;
}

export default function ProfileCard({ data }: ProfileCardProps) {
  const firstName = data?.firstName || "Student";
  const middleName = data?.middleName || "";
  const lastName = data?.lastName || "";
  const suffix = data?.suffix || "";
  const email = data?.email || "No email";
  const sectionName = data?.section?.name || "No Section Assigned";
  const initials =
  `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  const dateJoined = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '—';


  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        className="h-32 sm:h-48 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      </div>
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="-mt-12 lg:-mt-16 flex-shrink-0 relative z-10">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white bg-light_coffee flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-bold text-light_brown">{initials}</span>
            </div>
          </div>
          <div className="mt-4 lg:mt-4 lg:ml-6 flex-grow text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-baseline gap-3">
              <h1 className="text-2xl font-semibold text-gray-800">
                {firstName} {middleName} {lastName} {suffix}
              </h1>
              <h6 className="text-sm font-regular text-gray-400">{email}</h6>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-sm text-gray-600">

              <div className="bg-orange-500 text-white px-3 py-1 rounded-md flex items-center gap-2 font-medium">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                <span>{sectionName}</span>

              </div>
              <div className="flex items-center gap-1">
                <MaleProfile />
                <span>He/Him</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="text-text_light">
                  <Calendar size={12} />
                </div>
                <span>Created {dateJoined}</span>
              </div>

            </div>
          </div>
          <div className="mt-4 lg:mt-6 lg:ml-auto">
            <UpdateProfileModal />
          </div>
        </div>
      </div>
    </div>
  );
};