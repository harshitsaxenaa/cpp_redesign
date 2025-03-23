// pages/forums.tsx
import Layout from '@/components/Layout';
import { FaComments } from 'react-icons/fa';

const forums = [
  {
    name: 'Beginners',
    description: 'New to C++? Start here. Ask your questions and learn the basics.',
    posts: 120000,
    color: 'bg-blue-500',
  },
  {
    name: 'Windows Programming',
    description: 'Discuss development using the Windows API, MFC, and other Windows-specific tech.',
    posts: 54000,
    color: 'bg-green-500',
  },
  {
    name: 'Linux Programming',
    description: 'Everything about C++ on Linux including system programming and POSIX APIs.',
    posts: 37000,
    color: 'bg-red-500',
  },
  {
    name: 'General C++ Programming',
    description: 'Advanced C++ topics, OOP, templates, memory management, and best practices.',
    posts: 210000,
    color: 'bg-yellow-500 text-black',
  },
  {
    name: 'Lounge',
    description: 'Chit-chat, off-topic discussions, humor, and developer life.',
    posts: 89000,
    color: 'bg-pink-500',
  },
  {
    name: 'Articles & Tutorials',
    description: 'Community-made guides, tutorials, and deep dives on C++ concepts.',
    posts: 22000,
    color: 'bg-purple-500',
  },
];

export default function Forums() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          💬 C++ Community Forums
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-slate-800 hover:bg-slate-700 hover:scale-[1.02] transition-all duration-300 rounded-2xl p-6 shadow-xl border border-slate-700 animate-fade-in"
            >
              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${forum.color}`}>
                {forum.name}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4">{forum.description}</p>

              {/* Post Count */}
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FaComments className="text-slate-400" />
                <span>{forum.posts.toLocaleString()} posts</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <p className="text-center mt-12 text-slate-400 text-sm">
          Explore the full discussions on{' '}
          <a
            href="https://cplusplus.com/forum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-medium"
          >
            cplusplus.com/forum
          </a>
        </p>
      </div>
    </Layout>
  );
}
