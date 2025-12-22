"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* LEFT SIDE: Decorative / Branding */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center bg-light_coffee p-12 relative overflow-hidden">
        {/* Decorative Circle Background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-mocha rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-light_brown rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-text_heavy mb-6">Class Funds</h1>
          <p className="text-xl text-text_semi max-w-md">
            Manage your class finances with transparency and ease.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-text_heavy">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-text_light">
              Please enter your details to access your account.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text_semi">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-text_heavy shadow-sm focus:border-light_brown focus:outline-none focus:ring-1 focus:ring-light_brown sm:text-sm placeholder:text-gray-400"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text_semi">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-text_heavy shadow-sm focus:border-light_brown focus:outline-none focus:ring-1 focus:ring-light_brown sm:text-sm placeholder:text-gray-400"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-color_red border border-red-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full justify-center rounded-lg border border-transparent bg-text_heavy px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-text_semi focus:outline-none focus:ring-2 focus:ring-light_brown focus:ring-offset-2 transition-all duration-200 ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
          
          <p className="text-center text-xs text-text_light mt-6">
             &copy; {new Date().getFullYear()} Class Funds. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}