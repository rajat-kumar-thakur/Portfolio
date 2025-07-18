'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
    'Data Scientist',
    'Full Stack Developer'    
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(texts[currentIndex].slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, charIndex, isDeleting]);

  useEffect(() => {
    if (isDeleting && currentText === '') {
      setCharIndex(0);
    }
  }, [isDeleting, currentText]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Rajat Kumar Thakur profile"
            className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-primary object-cover shadow-lg"
          />

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Hi, I&apos;m <span className="text-primary">Rajat Kumar Thakur</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-foreground/80 min-h-[2rem]">
            I&apos;m a <span className="text-primary font-semibold">{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Dedicated and passionate Computer Science student with a strong interest in Artificial Intelligence, Deep Learning, 
            and Full Stack Development. 
            I am skilled in multiple programming languages and technologies, including C++, Python, JavaScript, and frameworks like Next.js and Pytorch. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToAbout}
              variant="default"
              size="lg"
              className="group"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="group"
              onClick={() => {
                // This would typically download the actual resume
                window.open('/resume.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/rajat-kumar-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rajat-kumar-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto: rajatlovescloud@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:scale-110 transform duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-foreground/50" />
      </div>
    </section>
  );
}