import Layout from '@/components/Layout';
import Link from 'next/link';


const references = [
  {
    category: 'C Library',
    items: [
      { name: '<cassert>', desc: 'C Diagnostics Library (header)' },
      { name: '<cctype>', desc: 'Character handling functions (header)' },
      { name: '<cerrno>', desc: 'C Errors (header)' },
      { name: '<cfenv>', desc: 'Floating-point environment (header)' },
      { name: '<cfloat>', desc: 'Characteristics of floating-point types (header)' },
      { name: '<cinttypes>', desc: 'C integer types (header)' },
      { name: '<ciso646>', desc: 'ISO 646 Alternative operator spellings (header)' },
      { name: '<climits>', desc: 'Sizes of integral types (header)' },
      { name: '<clocale>', desc: 'C localization library (header)' },
      { name: '<cmath>', desc: 'C numerics library (header)' },
      { name: '<csetjmp>', desc: 'Non local jumps (header)' },
      { name: '<csignal>', desc: 'C library to handle signals (header)' },
      { name: '<cstdarg>', desc: 'Variable arguments handling (header)' },
      { name: '<cstdbool>', desc: 'Boolean type (header)' },
      { name: '<cstddef>', desc: 'C Standard definitions (header)' },
      { name: '<cstdint>', desc: 'Integer types (header)' },
      { name: '<cstdio>', desc: 'C library to perform Input/Output operations (header)' },
      { name: '<cstdlib>', desc: 'C Standard General Utilities Library (header)' },
      { name: '<cstring>', desc: 'C Strings (header)' },
      { name: '<ctgmath>', desc: 'Type-generic math (header)' },
      { name: '<ctime>', desc: 'C Time Library (header)' },
      { name: '<cuchar>', desc: 'Unicode characters (header)' },
      { name: '<cwchar>', desc: 'Wide characters (header)' },
      { name: '<cwctype>', desc: 'Wide character type (header)' },
    ],
  },
  {
    category: 'Containers',
    items: [
      { name: '<array>', desc: 'Array header (header)' },
      { name: '<bitset>', desc: 'Bitset header (header)' },
      { name: '<deque>', desc: 'Deque header (header)' },
      { name: '<forward_list>', desc: 'Forward list (header)' },
      { name: '<list>', desc: 'List header (header)' },
      { name: '<map>', desc: 'Map header (header)' },
      { name: '<queue>', desc: 'Queue header (header)' },
      { name: '<set>', desc: 'Set header (header)' },
      { name: '<stack>', desc: 'Stack header (header)' },
      { name: '<unordered_map>', desc: 'Unordered map header (header)' },
      { name: '<unordered_set>', desc: 'Unordered set header (header)' },
      { name: '<vector>', desc: 'Vector header (header)' },
    ],
  },
  {
    category: 'Input/Output',
    items: [
      { name: '<fstream>', desc: 'File stream operations (header)' },
      { name: '<iomanip>', desc: 'I/O manipulators (header)' },
      { name: '<ios>', desc: 'Base I/O classes (header)' },
      { name: '<iosfwd>', desc: 'Forward declarations for I/O (header)' },
      { name: '<iostream>', desc: 'Standard I/O stream objects (header)' },
      { name: '<istream>', desc: 'Input stream class (header)' },
      { name: '<ostream>', desc: 'Output stream class (header)' },
      { name: '<sstream>', desc: 'String stream classes (header)' },
      { name: '<streambuf>', desc: 'Stream buffer classes (header)' },
    ],
  },
  {
    category: 'Multi-threading',
    items: [
      { name: '<atomic>', desc: 'Atomic operations library (header)' },
      { name: '<condition_variable>', desc: 'Condition variable class (header)' },
      { name: '<future>', desc: 'Futures and promises (header)' },
      { name: '<mutex>', desc: 'Mutual exclusion primitives (header)' },
      { name: '<thread>', desc: 'Thread support library (header)' },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: '<algorithm>', desc: 'Algorithms library (header)' },
      { name: '<bitset>', desc: 'Bitset header (header)' },
      { name: '<chrono>', desc: 'Time utilities (header)' },
      { name: '<codecvt>', desc: 'Unicode conversion facets (header)' },
      { name: '<complex>', desc: 'Complex number library (header)' },
      { name: '<exception>', desc: 'Exception handling (header)' },
      { name: '<functional>', desc: 'Function objects (header)' },
      { name: '<initializer_list>', desc: 'Initializer list (header)' },
      { name: '<iterator>', desc: 'Iterator definitions (header)' },
      { name: '<limits>', desc: 'Numeric limits (header)' },
      { name: '<locale>', desc: 'Localization utilities (header)' },
      { name: '<memory>', desc: 'Dynamic memory management (header)' },
      { name: '<new>', desc: 'Low-level memory management (header)' },
      { name: '<numeric>', desc: 'Numeric operations (header)' },
      { name: '<random>', desc: 'Random number generation (header)' },
      { name: '<ratio>', desc: 'Compile-time rational arithmetic (header)' },
      { name: '<regex>', desc: 'Regular expressions (header)' },
      { name: '<stdexcept>', desc: 'Standard exception objects (header)' },
      { name: '<string>', desc: 'String classes (header)' },
      { name: '<system_error>', desc: 'System error support (header)' },
      { name: '<tuple>', desc: 'Tuple library (header)' },
      { name: '<type_traits>', desc: 'Type traits (header)' },
      { name: '<typeindex>', desc: 'Type index library (header)' },
      { name: '<typeinfo>', desc: 'Type information (header)' },
      { name: '<utility>', desc: 'Utility components (header)' },
      { name: '<valarray>', desc: 'Class for representing and manipulating arrays (header)' },
    ],
  }

,
];




export default function References() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">


        <h1 className="text-4xl font-bold mb-10 text-center animate-fade-in-up">📚 C++ Standard Library References</h1>
        <div className="space-y-10 max-w-6xl mx-auto">
          {references.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-4 border-b border-slate-600 pb-2">{section.category}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <li key={i} className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-4 shadow-md">
  <Link href={`/final?header=${encodeURIComponent(item.name)}`}>
    <div className="cursor-pointer">
      <span className="font-mono text-blue-400">{item.name}</span>
      <p className="text-sm text-slate-300 mt-1">{item.desc}</p>
    </div>
  </Link>
</li>

                ))}
              </ul>


            </div>
          ))}
        </div>
      </div>


    </Layout>
  );


}
