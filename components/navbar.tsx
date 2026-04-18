"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          ShopEase
        </h1>
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-white">
        <li className="hover:text-purple-400 cursor-pointer">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-purple-400 cursor-pointer">
          <Link href="/men">Men</Link>
        </li>

        <li className="hover:text-purple-400 cursor-pointer">
          <Link href="/women">Women</Link>
        </li>

        <li className="hover:text-purple-400 cursor-pointer">
          <Link href="/kids">Kids</Link>
        </li>

        <li className="hover:text-purple-400 cursor-pointer">
          <Link href="/products">Products</Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-lg hover:bg-red-100">
          ❤️
        </button>

        <Link href="/login">
          <button className="px-4 py-2 text-white rounded-lg hover:bg-purple-700">
            Login
          </button>
        </Link>

        <Link href="/register">
          <button className="px-4 py-2 text-white rounded-lg hover:bg-purple-700">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}