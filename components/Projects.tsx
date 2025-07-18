'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    users?: string;
  };
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'AI Readme Generator',
      description: 'Developed an AI-powered README generator using Next.js, REST API, Gemini AI, and Tailwind CSS. Produces READMEs in under 10s, supports 200+ users, and integrates GitHub REST API and custom prompts.',
      image: '',
      technologies: ['Next.js', 'REST API', 'Gemini AI', 'Tailwind CSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/rajat-kumar-thakur/ai-readme-generator',
      featured: true,
      stats: { users: '200+' }
    },
    {
      title: 'Edge, Corner and Pose Estimation for Pick and Place Applications',
      description: 'Prepared a 4x faster pipeline for pose estimation in point clouds using surface variation and Harris Corner detection. Achieved a 70% reduction in computation time compared to state-of-the-art methods.',
      image: '',
      technologies: ['Computer Vision'],
      liveUrl: '',
      githubUrl: '',
      featured: true,
    },
    {
      title: 'Low Light Image Enhancement using Deep Learning',
      description: 'Executed a 2-phase approach for enhancing low-light images using Decomposition and Refinement techniques. Achieved 90% improvement in brightness and contrast.',
      image: '',
      technologies: ['Deep Learning', 'Image Processing'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
    },
    {
      title: 'File Sharing Web App',
      description: 'Built a full-stack file sharing platform with automated email integration, managing 1000s of concurrent users. Added email automation for personalized download messages, improving engagement by 70%.',
      image: '',
      technologies: ['MERN'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
    },
    {
      title: 'Restaurant Management System in Assembly',
      description: 'Accelerated Microsoft Macro Assembler based RMS food service operations, reducing order processing time by 70%. Managed bill history and automated bill generation for restaurants.',
      image: '',
      technologies: ['x86 Assembly Language', 'MASM32'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my best work, featuring full-stack applications and innovative solutions 
            built with modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.stats && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Github className="h-4 w-4 mr-1" />
                      {project.stats.forks}
                    </div>
                    <div>
                      {project.stats.users} users
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h4>
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/30 text-foreground/60 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-foreground/70 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            asChild
          >
            <a
              href="https://github.com/rajat-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}