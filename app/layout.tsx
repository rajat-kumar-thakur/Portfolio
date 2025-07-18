import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajat Kumar Thakur | Portfolio',
  description: 'Professional portfolio of Rajat Kumar Thakur, a skilled Full Stack Developer with experience specializing in React.js, Node.js, MongoDB, and modern web technologies.',
  keywords: ['Rajat Kumar Thakur', 'Full Stack Developer', 'React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Rajat Kumar Thakur' }],
  creator: 'Rajat Kumar Thakur',
  publisher: 'Rajat Kumar Thakur',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajatkumarthakur.vercel.app',
    title: 'Rajat Kumar Thakur - Software Developer Portfolio',
    description: 'Professional portfolio showcasing Full Stack development expertise with React.js, Node.js, and modern web technologies.',
    siteName: 'Rajat Kumar Thakur Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajat Kumar Thakur',
    description: 'Professional portfolio showcasing Full Stack development expertise with React.js, Node.js, and modern web technologies.',
    creator: '@rajat_thakur',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}