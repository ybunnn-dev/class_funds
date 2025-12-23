"use client";

import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function AddStudentModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* 1. Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-text_heavy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
      >
        <Plus size={16} />
        Add Student
      </button>

      {/* 2. Modal Overlay (Only shows if isOpen is true) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <style jsx>{`
            @keyframes modalPop {
              0% { opacity: 0; transform: scale(0.95) translateY(10px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-modal { animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            .animate-fade { animation: fadeIn 0.2s ease-out forwards; }
          `}</style>
          <div 
            className="fixed inset-0 bg-black/50 animate-fade"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-modal">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-lg text-text_heavy">Add Student</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              
              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium text-text_heavy mb-1">Contribution Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Christmas Party" 
                  className="w-full rounded-lg border-gray-200 text-sm focus:border-text_heavy focus:ring-text_heavy"
                />
              </div>

              {/* Amount & Date Grid - Responsive (Stacks on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text_heavy mb-1">Amount per Head</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-400 text-sm">₱</span>
                    <input 
                      type="number" 
                      placeholder="200.00" 
                      className="w-full pl-7 rounded-lg border-gray-200 text-sm focus:border-text_heavy focus:ring-text_heavy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_heavy mb-1">Due Date</label>
                  <input 
                    type="date" 
                    className="w-full rounded-lg border-gray-200 text-sm focus:border-text_heavy focus:ring-text_heavy"
                  />
                </div>
              </div>

              {/* Type Select */}
              <div>
                <label className="block text-sm font-medium text-text_heavy mb-1">Type</label>
                <select className="w-full rounded-lg border-gray-200 text-sm focus:border-text_heavy focus:ring-text_heavy text-gray-600">
                  <option>Event Fund</option>
                  <option>Class Materials</option>
                  <option>Penalty/Fine</option>
                  <option>Miscellaneous</option>
                </select>
              </div>

            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors w-full sm:w-auto"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="px-4 py-2 text-sm font-medium text-white bg-text_heavy rounded-lg hover:bg-opacity-90 transition-colors w-full sm:w-auto"
              >
                Create Event
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}