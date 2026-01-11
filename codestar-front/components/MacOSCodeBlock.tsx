'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MacOSCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  allowCopy?: boolean;
}

export default function MacOSCodeBlock({ 
  code, 
  language = "javascript", 
  filename, 
  className = "", 
  allowCopy = false 
}: MacOSCodeBlockProps) {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie', err);
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-2xl w-full max-w-3xl ${className}`}>
      
      {/* Header de la fenêtre */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-900">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {filename && (
          <div className="text-gray-400 text-xs font-mono font-medium opacity-80 select-none">
            {filename}
          </div>
        )}

        <div className="w-12 flex justify-end">
          {allowCopy ? (
            <button 
              onClick={handleCopy}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
              title="Copier le code"
            >
              {isCopied ? (
                // icone valider
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ) : (
                // icone copier
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              )}
            </button>
          ) : (
            <div className="w-3" /> 
          )}
        </div>
      </div>

      <div className="text-sm">
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}