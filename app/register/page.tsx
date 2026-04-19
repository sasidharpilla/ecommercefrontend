"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API_URL = "https://ecommerceproject-production-d3e8.up.railway.app";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });

      // 🔥 handle non-json errors safely
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!res.ok) {
        throw new Error(data?.message || "Registration Failed");
      }

      alert("Registration Successful ✅");
      router.push("/login");

    } catch (error: any) {
      console.error("Register error:", error);
      alert(error.message || "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">

      <div className="w-full max-w-md mx-auto px-4">

        <div className="w-full bg-black rounded-2xl text-center shadow-2xl p-8">

          <h1 className="text-2xl font-bold text-white mb-6">
            Signup
          </h1>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-pink-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-pink-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-pink-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-pink-400 outline-none py-2 text-white placeholder:text-gray-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-2 rounded-full text-white font-semibold transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90"
              }`}
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </button>

          </form>

          {/* Login link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-white font-semibold hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}