"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react"; // 1. Import signOut
import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";

// Renamed from DashboardLayout to PanelLayout to reflect its broader use
export default function PanelLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "./dashboard", icon: LayoutDashboard },
    { name: "Contributions", href: "./contributions", icon: Wallet },
    { name: "Class List", href: "./students", icon: Users }, 
    { name: "Settings", href: "./settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-text_heavy overflow-hidden">
      
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo Area */}
        <div className="flex h-16 items-center justify-center border-b border-gray-100 bg-light_coffee/10">
          <h1 className="text-2xl font-bold text-text_heavy tracking-tight">
            Class<span className="text-light_brown">Funds</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 px-4 space-y-2">
          {navItems.map((item) => {
            // Check if the current path starts with the link href (handles sub-pages)
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors
                ${isActive 
                  ? "bg-light_coffee text-text_heavy shadow-sm" 
                  : "text-text_light hover:bg-gray-50 hover:text-text_heavy"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-light_brown" : "text-gray-400"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="absolute bottom-0 w-full border-t border-gray-100 p-4">
          <button 
            // 2. Add the onClick handler
            onClick={() => signOut({ callbackUrl: "/view/auth/login" })}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-color_red hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP BAR (Mobile Toggle & Title) */}
        <header className="flex h-16 items-center justify-between bg-white px-6 border-b border-gray-100 lg:hidden">
          <span className="font-semibold text-lg">
             {/* Dynamic Header Title based on current route */}
             {navItems.find(i => pathname.startsWith(i.href))?.name || "Dashboard"}
          </span>
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)} 
            className="text-gray-500 hover:text-text_heavy"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}