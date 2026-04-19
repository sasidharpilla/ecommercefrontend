"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API_URL = "https://ecommerceproject-production-d3e8.up.railway.app";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // 👇 safer JSON handling
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server did not return valid JSON");
      }

      if (!res.ok) {
        throw new Error(data?.message || "Login Failed");
      }

      const token = data.token || data.accessToken;

   

      alert("Login Successful ✅");
      router.push("/");
    } catch (error: any) {
      console.error("LOGIN ERROR:", error);

      // 👇 better error message
      if (error.message === "Failed to fetch") {
        alert("Cannot connect to server 🚫 (Check backend / CORS)");
      } else {
        alert(error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">

      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">

        <div className="w-full bg-black rounded-2xl shadow-2xl p-8">

          <h1 className="text-2xl font-bold text-center text-white mb-6">
            Login Page
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-purple-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-purple-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <span className="hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-full text-white font-semibold transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90"
              }`}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>

          </form>

          {/* Divider */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Or login with
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              f
            </button>
            <button className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center">
              t
            </button>
            <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
              G
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Not a member?{" "}
            <Link href="/register" className="font-semibold hover:underline text-white">
              Sign up now
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}