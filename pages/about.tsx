import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 text-white px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are a passionate team of C++ enthusiasts providing high-quality resources for learners, developers, and professionals.
        </p>
      </section>
    </Layout>
  );
}
