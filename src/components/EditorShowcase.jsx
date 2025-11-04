import { Check, Copy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AvatarBubble({ src, fallback, color = 'indigo' }) {
  return (
    <div className={`h-7 w-7 rounded-full ring-2 ring-white shadow -ml-2 first:ml-0 bg-${color}-100 overflow-hidden` }>
      {src ? (
        <img src={src} alt={fallback} className="h-full w-full object-cover" />
      ) : (
        <div className={`h-full w-full grid place-items-center text-${color}-700 text-xs font-medium`}>{fallback}</div>
      )}
    </div>
  );
}

export default function EditorShowcase() {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState(`#include <bits/stdc++.h>\nusing namespace std;\n\nlong long fib(int n){\n  if(n<=1) return n;\n  return fib(n-1)+fib(n-2);\n}\n\nint main(){\n  cout << fib(10) << "\\n";\n}`);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <section id="editor" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Collaborative editor</h3>
            <p className="mt-1 text-slate-600">Invite teammates and code together in the same C++ file.</p>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-4">
              <AvatarBubble fallback="AK" color="indigo" />
              <AvatarBubble fallback="JM" color="blue" />
              <AvatarBubble fallback="SY" color="violet" />
            </div>
            <span className="text-sm text-slate-600 hidden sm:inline-flex items-center gap-1"><Users className="h-4 w-4"/> 3 online</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200">
            <div className="text-sm text-slate-600">main.cpp</div>
            <button
              onClick={() => {
                if (textareaRef.current) {
                  navigator.clipboard.writeText(textareaRef.current.value);
                  setCopied(true);
                }
              }}
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50"
            >
              {copied ? (<><Check className="h-4 w-4 text-green-600"/>Copied</>) : (<><Copy className="h-4 w-4"/>Copy</>)}
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-72 md:h-96 font-mono text-sm leading-6 p-4 outline-none resize-none bg-white"
          />
        </div>
      </div>
    </section>
  );
}
