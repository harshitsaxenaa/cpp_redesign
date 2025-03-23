import Layout from '@/components/Layout';

const codeSections = [
  {
    label: '#include <iostream>',
    description: 'Used to include the input/output stream library.',
    highlight: 'text-pink-400',
  },
  {
    label: 'using namespace std;',
    description: 'Avoids writing std:: repeatedly.',
    highlight: 'text-purple-400',
  },
  {
    label: 'int main() {',
    description: 'Starting point of every C++ program.',
    highlight: 'text-blue-400',
  },
  {
    label: '    cout << "Hello, World!";',
    description: 'Prints output to the console.',
    highlight: 'text-green-400',
  },
  {
    label: '    return 0;',
    description: 'Ends the program successfully.',
    highlight: 'text-yellow-400',
  },
  {
    label: '}',
    description: 'Closes the main function block.',
    highlight: 'text-red-400',
  },
];

export default function Structure() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          🧱 C++ Program Structure
        </h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* CODE BLOCK */}
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-xl font-mono text-sm">
            {codeSections.map((section, index) => (
              <div key={index} className={`mb-2 ${section.highlight}`}>
                {section.label}
              </div>
            ))}
          </div>

         
          <div className="space-y-6">
            {codeSections.map((section, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all">
                <p className="font-semibold text-lg mb-1">{section.label}</p>
                <p className="text-gray-400 text-sm">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
