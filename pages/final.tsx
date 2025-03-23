import Layout from '@/components/Layout';

export default function TutorialsPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 text-white px-6 py-24 flex items-center justify-center text-center">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-blue-400">Under Active Compilation 🚧</h1>
          <p className="text-xl text-gray-300">
            I wanted to build everything but time made me “do a little less”... so here I am.. 😉
          </p>
          <p className="text-gray-400">
            The real C++ tutorials are brewing in the background — one `#include` at a time.
          </p>
          <p className="italic text-sm text-gray-500">
             Come back later. The compiler&apos;s still warming up.
          </p>
        </div>
      </section>
    </Layout>
  );
}
