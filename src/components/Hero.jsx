import { Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-sm font-medium">
              <Zap className="h-4 w-4" /> Real‑time C++ collaboration
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Code together, review faster, and ship better C++.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Live multi‑cursor editing, voice/video calls, chat, and inline comments—all in your browser.
              Spin up a room, invite your team, and watch updates stream in instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl">
                Create a room
              </button>
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                Join with a code
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600"/>End‑to‑end rooms</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-indigo-600"/>Low‑latency sync</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-24 -right-10 h-72 w-72 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 -left-10 h-72 w-72 bg-indigo-200/40 rounded-full blur-3xl" />
            <div className="relative bg-slate-900 rounded-2xl ring-1 ring-slate-800 shadow-2xl overflow-hidden">
              <div className="px-4 py-2 bg-slate-800/60 border-b border-slate-700 flex items-center gap-2 text-slate-300 text-xs">
                <div className="flex gap-1">
                  <span className="h-2.5 w-2.5 bg-red-500 rounded-full" />
                  <span className="h-2.5 w-2.5 bg-yellow-500 rounded-full" />
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full" />
                </div>
                <span className="truncate">main.cpp • shared session</span>
              </div>
              <pre className="text-sm leading-relaxed px-5 py-4 text-slate-100 overflow-auto">
{`#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  vector<int> a = {1, 1, 2, 3, 5, 8};
  long long sum = accumulate(a.begin(), a.end(), 0LL);
  cout << "Sum: " << sum << "\n";

  return 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
