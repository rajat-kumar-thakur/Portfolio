'use client';

import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from './ui/Card';

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
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: 'Jan 2022 - Present',
      description: 'Leading development of scalable web applications using React.js, Node.js, and cloud technologies. Responsible for full-stack development, architecture decisions, and implementing DevOps practices.',
      achievements: [
        'Developed and deployed 10+ full-stack applications using React.js and Node.js',
        'Implemented microservices architecture improving system scalability by 50%',
        'Set up CI/CD pipelines using Jenkins and Docker, reducing deployment time by 70%',
        'Optimized database queries and application performance, improving response time by 40%',
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Software Developer',
      company: 'Digital Innovations Ltd.',
      location: 'India',
      period: 'Jun 2021 - Dec 2021',
      description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications using React.js and Express.js',
        'Integrated third-party APIs and payment gateways for e-commerce platforms',
        'Implemented automated testing strategies improving code quality by 30%',
        'Collaborated with UI/UX designers to create intuitive user interfaces',
      ],
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Redux', 'Material-UI'],
    },
    {
      title: 'Junior Developer',
      company: 'StartupTech',
      location: 'India',
      period: 'Jan 2021 - May 2021',
      description: 'Started career as a junior developer working on various web development projects. Gained hands-on experience with modern web technologies and development practices.',
      achievements: [
        'Developed frontend components using React.js and modern CSS frameworks',
        'Participated in code reviews and learned best practices from senior developers',
        'Contributed to multiple projects improving development skills rapidly',
        'Implemented responsive designs ensuring cross-browser compatibility',
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
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