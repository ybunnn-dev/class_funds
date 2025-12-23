"use client";

import { Plus, Calendar } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* 1. THE BANNER */}
      <div 
        className="h-32 sm:h-48 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      </div>

      {/* 2. THE CONTENT SECTION */}
      <div className="px-6 pb-6 relative">
        
        {/* Changed: Added lg:flex-row and items-center for mobile centering */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
            
          {/* 3. PROFILE PICTURE */}
          {/* Changed: Adjusted negative margin breakpoint to match layout */}
          <div className="-mt-12 lg:-mt-16 flex-shrink-0 relative z-10">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-blue-500">JB</span>
            </div>
            
            <button className="absolute bottom-1 right-1 bg-orange-400 p-1.5 rounded-full text-white border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
            </button>
          </div>

          {/* 4. TEXT INFORMATION */}
          {/* Changed: Added text-center for mobile, text-left for lg+ */}
          <div className="mt-4 lg:mt-4 lg:ml-6 flex-grow text-center lg:text-left">
            <h1 className="text-2xl font-semibold text-gray-800">
              John Ivan B. Belaro
            </h1>

            {/* Changed: Added justify-center for mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-sm text-gray-600">
              
              <div className="bg-orange-500 text-white px-3 py-1 rounded-md flex items-center gap-2 font-medium">
                <span>2022-4029-93130</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                <span>4th Year | BSIT</span>
              </div>

              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Purok 1, Cm. Recto, St. San Julian Irosin Sorsogon 4707</span>
              </div>

            </div>
          </div>

          {/* 5. EDIT BUTTON */}
          <div className="mt-4 lg:mt-6 lg:ml-auto">
             <button className="border border-blue-400 text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};