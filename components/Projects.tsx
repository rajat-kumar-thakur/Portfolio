'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
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
      description: 'Developed an AI-powered README generator using Next.js, REST API, Gemini AI, and Tailwind CSS. Produces READMEs in under 10s, and integrates GitHub REST API and custom prompts.',
      image: '/githubreadmegenerator.png',
      technologies: ['Next.js', 'REST API', 'Google Gemini', 'Tailwind CSS'],
      liveUrl: 'https://custom-github-ai-readme-generator.vercel.app/',
      githubUrl: 'https://github.com/rajat-kumar-thakur/GithubReadmeGenerator',
      featured: true,
      stats: {  users: '200+' }
    },
    {
      title: 'Accelerated Feature and Pose Estimation for Time-Critical Pick-and-Place Applications',
      description: 'Prepared a 4x faster pipeline for pose estimation in point clouds using surface variation and Harris Corner detection. Achieved a 70% reduction in computation time compared to state-of-the-art methods.',
      image: '/workflow.png',
      technologies: ['Computer Vision', 'Python', '3D Point Cloud'],
      githubUrl: 'https://github.com/rajat-kumar-thakur/Accelerated-Feature-and-Pose-Estimation-for-Time-Critical-Pick-and-Place-Applications',
      featured: true,
    },
    {
      title: 'Restaurant Management System in Assembly',
      description: 'Accelerated Microsoft Macro Assembler based Restaurant Management System food service operations, reducing order processing time. Managed bill history and automated bill generation for restaurants.',
      image: '/assembly.png',
      technologies: ['x86 Assembly Language', 'MASM'],
      githubUrl: 'https://github.com/rajat-kumar-thakur/Restaurant-Mangament-System',
      featured: true,
    },
    {
      title: 'Low Light Image Enhancement using Deep Learning',
      description: 'Executed a two-phase approach for enhancing low-light images using Decomposition and Refinement techniques. Achieved 90% improvement in brightness and contrast.',
      image: '',
      technologies: ['Deep Learning', 'Image Processing'],
      githubUrl: '',
      featured: false,
    },
    {
      title: 'File Sharing Web App',
      description: 'Built a full-stack file sharing platform with automated email integration, managing concurrent users. Added email automation for personalized download messages, improving engagement.',
      image: '',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '',
      githubUrl: 'https://github.com/rajat-kumar-thakur/File-Sharing-App',
      featured: false,
    },
    {
      title: 'Collaborative Whiteboard App',
      description: 'A collaborative whiteboard application built with TypeScript and Vite. Enables real-time drawing and collaboration using websockets on a digital canvas.',
      image: '/collab.png', // Add an image to public/ and update this path if available
      technologies: ['React', 'Typescript', 'WebSockets', 'Canvas API'],
      liveUrl: 'https://basic-whiteboard-app.vercel.app/',
      githubUrl: 'https://github.com/rajat-kumar-thakur/Whiteboard-App',
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
                  {project.liveUrl && (
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
                  )}
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
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
              href="https://github.com/rajat-kumar-thakur"
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