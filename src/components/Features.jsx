import { Users, MessageSquare, Video, Code2, GitBranch, Shield, Timer } from 'lucide-react';

const features = [
  { icon: Users, title: 'Multi‑cursor editing', desc: 'Watch teammates type in real‑time with colored cursors and name tags.' },
  { icon: MessageSquare, title: 'Threaded chat', desc: 'Discuss snippets, share notes, and keep decisions in context.' },
  { icon: Video, title: 'Voice & video calls', desc: 'Hop on a call with screen-share and low-latency audio.' },
  { icon: Code2, title: 'C++‑first tooling', desc: 'Syntax highlight, lint, and compile/run from the cloud sandbox.' },
  { icon: GitBranch, title: 'Branch preview', desc: 'Preview diffs together and merge with confidence.' },
  { icon: Shield, title: 'Secure by default', desc: 'Ephemeral rooms, role-based access, and audit logs.' },
  { icon: Timer, title: 'Fast by design', desc: 'Edge‑accelerated presence and CRDT sync for snappy edits.' },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need to pair on C++</h2>
          <p className="mt-3 text-slate-600">Built for competitive programming, systems work, and code reviews.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
