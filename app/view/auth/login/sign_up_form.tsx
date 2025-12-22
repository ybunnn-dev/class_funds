"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation"; // Uncomment if using Next.js for redirection

export default function SignUpForm({ onLoginClick }: { onLoginClick: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 1. Create state to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    block: "", // Block/Section
    email: "",
    password: "",
  });

  // 2. Generic handler to update state when typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // 3. The API Call
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Accept": "application/json" // Useful if using Laravel
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle server errors (e.g., "Email already exists")
        throw new Error(data.message || "Registration failed");
      }

      // 4. Success Logic
      alert("Account created successfully!");
      // window.location.href = "/dashboard"; // Example redirect
      // or onLoginClick(); // Switch to login view

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg space-y-8 bg-white px-8 py-10 sm:px-12">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tight text-text_heavy">
          Create Account
        </h2>
        <p className="mt-2 text-sm text-text_light">
          Join your class fund management system today.
        </p>
      </div>

      {/* Error Message Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-5" onSubmit={handleSignUp}>
        {/* Name Grid */}
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 sm:col-span-6">
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">First Name</label>
            <input 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              type="text" required 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="Juan" 
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Middle Name</label>
            <input 
              name="middleName" 
              value={formData.middleName}
              onChange={handleChange}
              type="text" 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="Dela" 
            />
          </div>
          <div className="col-span-8">
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Last Name</label>
            <input 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              type="text" required 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="Cruz" 
            />
          </div>
          <div className="col-span-4">
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Suffix</label>
            <input 
              name="suffix" 
              value={formData.suffix}
              onChange={handleChange}
              type="text" 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="Jr." 
            />
          </div>
        </div>

        {/* Block / Section & Email */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Block / Section</label>
            <input 
              name="block" 
              value={formData.block}
              onChange={handleChange}
              type="text" required 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="BSIT 3-A" 
            />
          </div>
          
           <div>
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Email Address</label>
            <input 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              type="email" required 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="you@example.com" 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-text_semi uppercase mb-1">Password</label>
            <input 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              type="password" required 
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-text_heavy focus:border-light_brown focus:ring-1 focus:ring-light_brown" 
              placeholder="••••••••" 
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-text_heavy px-4 py-3 text-sm font-bold text-white shadow hover:bg-text_semi focus:ring-2 focus:ring-light_brown transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </div>
      </form>

      {/* Switcher for Mobile only */}
      <div className="mt-6 text-center lg:hidden">
        <p className="text-sm text-text_light">
          Already have an account?{" "}
          <button onClick={onLoginClick} className="font-semibold text-light_brown hover:underline">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}