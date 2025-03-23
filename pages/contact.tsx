import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 text-white px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions or suggestions? Reach out to us at <a href="mailto:support@cplusplus.com" className="text-blue-400 underline">support@cplusplus.com</a>.
        </p>
      </section>
    </Layout>
  );
}
