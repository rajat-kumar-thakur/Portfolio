'use client';

import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-foreground/70 flex items-center justify-center md:justify-start">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Rajat Kumar Thakur
            </p>
            <p className="text-sm text-foreground/50 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}