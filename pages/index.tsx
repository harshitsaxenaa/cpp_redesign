import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 md:px-10">
        <div className="max-w-4xl space-y-6 animate-fade-in-up">
          <h1 className="text-5xl font-bold leading-tight">Welcome to C++ Resources Network</h1>
          <p className="text-xl text-gray-300">
            Your ultimate destination for mastering C++ — from references and tutorials to articles and forums.
          </p>
          <Link href="/references">
	
            <button className="bg-blue-500 mt-7 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg shadow-lg transition duration-300">
              Dive into C++
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Explore C++ Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Tutorials', href: '/tutorial', desc: 'Beginner to advanced tutorials to boost your C++ skills.' },
              { title: 'References', href: '/references', desc: 'Full C++ standard library reference and examples.' },
              { title: 'Articles', href: '/articles', desc: 'Community-contributed articles, tips, and tricks.' },
              { title: 'Forums', href: '/forums', desc: 'Discuss, ask questions, and collaborate with others.' },
            ].map((item, idx) => (
              <Link href={item.href} key={idx} className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl shadow-md transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-4">Latest Highlights</h2>
            <ul className="space-y-4 text-gray-300">
              <li>🚀 C++23 support added to references</li>
              <li>💡 New article: Understanding constexpr vs const</li>
              <li>🛠️ Major performance tweaks to forum search</li>
            </ul>
          </div>
          <aside className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Latest Forum Threads</h3>
            <ul className="space-y-2 text-blue-400">
              <li><Link href="/final">Pointers vs Smart Pointers</Link></li>
              <li><Link href="/final">Best IDEs for C++ in 2025</Link></li>
              <li><Link href="/final">C++ memory leaks — how to detect?</Link></li>
            </ul>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
