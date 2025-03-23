import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock validation
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Just redirect for now
    router.push('/');
  };

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 py-20">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 text-center">
            {isLogin ? 'Login to your account' : 'Create an account'}
          </h2>

          {!isLogin && (
            <div>
              <label className="block mb-1 text-sm text-gray-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block mb-1 text-sm text-gray-300">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>

          <p className="text-xs text-center text-gray-500 mt-2">
            This is a demo authentication. No actual login/signup is performed.
          </p>
        </form>
      </section>
    </Layout>
  );
}
