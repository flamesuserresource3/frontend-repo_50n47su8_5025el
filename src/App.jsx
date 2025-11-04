import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EditorShowcase from './components/EditorShowcase';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <EditorShowcase />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} CppCollab — Built for teams who love C++.</p>
          <div className="text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <span className="mx-3">·</span>
            <a href="#editor" className="hover:text-slate-900">Editor</a>
            <span className="mx-3">·</span>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
