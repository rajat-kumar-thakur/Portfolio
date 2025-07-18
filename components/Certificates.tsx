'use client';

import { Award } from 'lucide-react';
import { Card } from './ui/card';

const certificates = [
  {
    title: 'Evaluation and Light Customization of Large Language Models',
    issuer: 'NVIDIA',
    date: 'July 2025',
    description: 'Certificate earned for demonstrating competence in completion of evaluation and light customization of large language models.',
    image: '/certificate_llms.png', // Add your image to public folder
    url: 'https://learn.nvidia.com/certificates?id=Kb8gQzsGRY-OLYZnV2KMow' // Replace with actual certificate link
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'September 2024',
    description: 'Certificate earned for demonstrating competence in completion of fundamentals of deep learning.',
    image: '/certificate_deeplearning.png', // Add your image to public folder
    url: 'https://learn.nvidia.com/certificates?id=jhY7wEZxSJi6jGO9czVKmg' // Replace with actual certificate link
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-background">
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
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-contain mb-2 rounded"
                />
              )}
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-primary" />
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary hover:underline">
                    {cert.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                )}
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