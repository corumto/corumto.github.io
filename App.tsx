import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-michigan-blue mb-4">
          Toland Corum
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This site is currently under construction.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/corumto" 
            className="w-10 h-10 bg-michigan-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          
          <a 
            href="https://linkedin.com/in/tolandc" 
            className="w-10 h-10 bg-michigan-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <a 
            href="mailto:toland@corumfam.com" 
            className="w-10 h-10 bg-michigan-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;