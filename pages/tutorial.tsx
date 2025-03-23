import Layout from '@/components/Layout';
import Link from 'next/link';

export default function TutorialsPage() {
  const tutorials = [
    { title: 'Getting Started', href: '/final' },
    { title: 'Variables and Types', href: '/final' },
    { title: 'Operators', href: '/final' },
    { title: 'Control Structures', href: '/final' },
    { title: 'Functions', href: '/final' },
    { title: 'Arrays', href: '/final' },
    { title: 'Pointers', href: '/final' },
    { title: 'Classes and Objects', href: 'final' },
    { title: 'Inheritance', href: '/final' },
    { title: 'Polymorphism', href: '/final' },
    { title: 'Templates', href: '/final' },
    { title: 'STL (Standard Template Library)', href: '/final' },
  ];

  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sidebar Navigation */}
          <aside className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-3">
            <h2 className="text-xl font-bold mb-4 text-center">Tutorial Index</h2>
            <nav className="space-y-2">
              {tutorials.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block text-blue-400 hover:underline hover:text-blue-300 transition"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          
          <main className="md:col-span-3 space-y-6">
            <h1 className="text-4xl font-bold mb-4">C++ Tutorials</h1>
            <p className="text-lg text-gray-300">
              Whether you&apos;re a beginner or experienced developer, these step-by-step tutorials will help you
              understand and master modern C++.
            </p>
            <p className="text-gray-400">
              C++ is a powerful, high-performance language widely used in software development, game engines,
              operating systems, and embedded systems. This series of tutorials will guide you through the core
              features of C++, starting from the basics and advancing to more complex topics like OOP and STL.
            </p>
            <p className="text-gray-400">
              Explore the index on the left to jump to specific topics, or follow the series in order to get a
              structured learning experience.
            </p>
          </main>
        </div>
      </section>
    </Layout>
  );
}
