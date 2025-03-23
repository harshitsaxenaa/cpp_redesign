import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-950 text-white px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We value your privacy. Any data collected on this site is handled responsibly and never shared with third parties.
        </p>
      </section>
    </Layout>
  );
}
