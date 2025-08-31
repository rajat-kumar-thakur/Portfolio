'use client';

import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from './ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Software Development Intern',
      company: 'Cableteque Corporation',
      location: 'Remote',
      period: 'Sept 2025 - Present',
      description: 'Assist in data preprocessing and cleaning for machine learning projects. Develop and optimize machine learning models using Python and relevant libraries. Conduct exploratory data analysis to identify trends and insights.',
      achievements: [
        'Implemented and tested different algorithms to evaluate model performance',
        'Collaborated with the team to deploy and monitor ML models in production environments',
        'Documented code, experiments, and results for knowledge sharing and reproducibility',
        'Participated in team meetings to discuss project progress and brainstorm innovative solutions',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Machine Learning', 'Data Analysis'],
    },
    {
      title: 'Summer Research Intern',
      company: 'IIT Gandhinagar',
      location: 'Gujarat, India',
      period: 'May 2025 - July 2025',
      description: 'Developed language models for code generation and execution on resource-constrained devices. Optimized SLMs, reducing inference latency by 46.3% for TinyLlama and achieving 2.57s for StarCoder.',
      achievements: [
        'Reduced inference latency by 46.3% for TinyLlama',
        'Achieved 2.57s inference for StarCoder',
        'Developed efficient pipelines for code analysis under 3s',
      ],
      technologies: ['Python', 'Pytorch', 'AI', 'TinyLlama', 'StarCoder'],
    },
    {
      title: 'Teaching Assistant',
      company: 'IIIT Vadodara',
      location: 'Gujarat, India',
      period: 'Aug 2024 - Apr 2025',
      description: 'Mentored 90+ students in software engineering and C programming. Also assisted 100+ students in developing analytical and programming skills during C lab sessions.',
      achievements: [
        'Guided students in scalable software design',
        'Supported C programming labs for 100+ students',
      ],
      technologies: ['C', 'Software Engineering'],
    },
    {
      title: 'General Secretary of Academics Committee',
      company: 'IIIT Vadodara',
      location: 'Gujarat, India',
      period: 'May 2024 - Apr 2025',
      description: 'Led a team of 8 in planning and executing academic-focused events. Organized and promoted 10+ academic events to enhance student engagement.',
      achievements: [
        'Organized 10+ academic events',
        'Led a team of 8 members',
      ],
      technologies: ['Leadership', 'Event Management'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey through various roles and companies, showcasing growth and achievements 
            in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Experience card */}
                <div className="ml-16">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-foreground/70 mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center text-foreground/60 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-foreground/70 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}