'use client';

import { Code, Server, Database, PenTool as Tool } from 'lucide-react';
import { Card } from './ui/card';

interface SkillProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-foreground/60">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'C', level: 97 },
        { name: 'C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'R', level: 70 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'SQL', level: 95 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Next.js', level: 85 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Pytorch', level: 85 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Tool className="h-6 w-6" />,
      skills: [
        { name: 'Google Cloud Platform', level: 70 },
        { name: 'Firebase', level: 70 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Postman', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across different technologies and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Relevant Coursework & Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Structure',
              'Software Engineering',
              'Image Processing',
              'Database Management',
              'System Software',
              'Data Analytics',
              'Algorithms',
              'Machine Learning',
              'Cryptography',
              'Computer Networks',
              'Artificial Intelligence',
              'Operating System',
              'NumPy',
              'Pandas',
              'Pytorch',
              'Matplotlib',
              'VS Code',
              'Jupyter Notebook',
              'Archimate',
              'StarUML',
              'Linux',
              'Selenium',
              'GitHub Actions',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}