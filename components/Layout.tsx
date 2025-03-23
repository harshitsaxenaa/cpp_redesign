import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-400">CPlusPlus+</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/references" className="hover:text-blue-400 transition">References</Link>
            <Link href="/structure" className="hover:text-blue-400 transition">Structure</Link>
            <Link href="/articles" className="hover:text-blue-400 transition">Articles</Link>
            <Link href="/forums" className="hover:text-blue-400 transition">Forums</Link>
            <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium transition">
              Login / Sign Up
            </Link>
          </div>

          {/* Hamburger Icon - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-gray-300">
            <Link href="/" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/references" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>References</Link>
            <Link href="/structure" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Structure</Link>
            <Link href="/articles" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Articles</Link>
            <Link href="/forums" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Forums</Link>
            <Link href="/auth" className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium transition" onClick={() => setMenuOpen(false)}>
              Login / Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>&copy; 2025 CPlusPlus Redesign. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
