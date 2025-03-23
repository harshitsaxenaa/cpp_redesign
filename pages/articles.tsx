// pages/articles.tsx
import Layout from '@/components/Layout';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const articles = [
  {
    name: 'mastering-pointers',
    title: '🔢 Mastering Pointers in C++',
    excerpt: 'Understand how pointers work, their syntax, and real-world use cases in C++.',
    author: 'Harshit',
    date: 'March 20, 2025',
    category: 'Pointers',
    badgeColor: 'bg-blue-600',
  },
  {
    name: 'deep-dive-pointers',
    title: '📍 Deep Dive: Function Pointers & Arrays',
    excerpt: 'Learn advanced pointer use cases in C++ with function pointers and multidimensional arrays.',
    author: 'Harshit',
    date: 'March 10, 2025',
    category: 'Pointers',
    badgeColor: 'bg-blue-700',
  },
  {
    name: 'oop-in-cpp',
    title: '🧠 Object-Oriented Programming in C++',
    excerpt: 'Explore classes, inheritance, polymorphism, and encapsulation with simple code samples.',
    author: 'Rohit Sharma',
    date: 'March 18, 2025',
    category: 'OOP',
    badgeColor: 'bg-green-600',
  },
  {
    name: 'stl-guide',
    title: '⏱️ STL Quick Guide',
    excerpt: 'Dive into C++ Standard Template Library: vectors, maps, sets, and more in one go.',
    author: 'Neha Patel',
    date: 'March 15, 2025',
    category: 'STL',
    badgeColor: 'bg-purple-600',
  },
  {
    name: 'stl-algorithms',
    title: '📚 Most Useful STL Algorithms You Should Know',
    excerpt: 'Sort, search, count, and manipulate with STL algorithms in one-liners!',
    author: 'Anjali Verma',
    date: 'March 13, 2025',
    category: 'STL',
    badgeColor: 'bg-purple-700',
  },
  {
    name: 'fast-io',
    title: '🚀 Fast I/O Techniques in C++',
    excerpt: 'Boost your competitive programming speed with faster input/output techniques.',
    author: 'Harshit',
    date: 'March 12, 2025',
    category: 'Performance',
    badgeColor: 'bg-yellow-500 text-black',
  },
  {
    name: 'lambda-expressions',
    title: '💡 Lambda Expressions in Modern C++',
    excerpt: 'Learn how to use lambdas for cleaner and functional-style code.',
    author: 'Sneha Gupta',
    date: 'March 8, 2025',
    category: 'Modern C++',
    badgeColor: 'bg-indigo-600',
  },
  {
    name: 'modern-templates',
    title: '🧪 Templates, Auto & Type Inference in C++17/20',
    excerpt: 'Write more flexible and powerful code with modern C++ features.',
    author: 'Ravi Kumar',
    date: 'March 6, 2025',
    category: 'Modern C++',
    badgeColor: 'bg-indigo-700',
  },
];

const allCategories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 animate-fade-in-up">
          📚 C++ Articles & Guides
        </h1>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link
              key={index}
              href={`/final?name=${article.name}`}
              className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 block"
            >
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${article.badgeColor}`}
              >
                {article.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center text-xs text-gray-500 gap-2">
                <FaUser />
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
