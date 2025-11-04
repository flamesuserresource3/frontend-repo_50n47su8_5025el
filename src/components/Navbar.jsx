import { Code2, Users, Video, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-md">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg">CppCollab</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#editor" className="hover:text-slate-900 transition-colors">Editor</a>
          <a href="#community" className="hover:text-slate-900 transition-colors flex items-center gap-2"><Users className="h-4 w-4"/>Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-white shadow-sm">
            <MessageSquare className="h-4 w-4"/>
            Try chat
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg">
            <Video className="h-4 w-4"/>
            Start a call
          </button>
        </div>
      </div>
    </header>
  );
}
