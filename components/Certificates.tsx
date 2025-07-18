'use client';

import { Award } from 'lucide-react';
import { Card } from './ui/card';

const certificates = [
  {
    title: 'NVIDIA Certificate of Competency in Evaluation and Light Customization of LLMs',
    issuer: 'NVIDIA',
    date: '2025',
    description: 'Earned for demonstrating competency in evaluation and light customization of large language models (LLMs).'
  },
  {
    title: 'Deep Learning Specialization (12-hour online training)',
    issuer: 'NVIDIA',
    date: '2025',
    description: 'Completed a comprehensive 12-hour online training specializing in deep learning.'
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certificates
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Recognitions and certifications earned for technical expertise and specialization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <Card key={idx} className="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
              </div>
              <div className="text-foreground/70 text-sm mb-1">
                <span className="font-medium">{cert.issuer}</span> &middot; {cert.date}
              </div>
              <div className="text-foreground/80 text-base">
                {cert.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 