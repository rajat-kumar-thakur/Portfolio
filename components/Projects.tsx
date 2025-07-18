'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

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
      title: 'Full-Stack E-Commerce Platform',
      description: 'A comprehensive e-commerce solution built with React.js, Node.js, and MongoDB. Features include product catalog, shopping cart, payment processing, user authentication, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'Stripe'],
      liveUrl: 'https://ecommerce-platform-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/ecommerce-platform',
      featured: true,
      stats: {
        stars: 89,
        forks: 25,
        users: '5k+'
      }
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A real-time chat application built with React.js, Node.js, and Socket.io. Features include private messaging, group chats, file sharing, and user presence indicators.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      liveUrl: 'https://chat-app-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/chat-application',
      featured: true,
      stats: {
        stars: 67,
        forks: 18,
        users: '3k+'
      }
    },
    {
      title: 'Task Management System',
      description: 'A comprehensive task management system with project tracking, team collaboration, and analytics. Built with modern web technologies and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://task-manager-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/task-management',
      featured: true,
      stats: {
        stars: 45,
        forks: 12,
        users: '2k+'
      }
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts using OpenWeatherMap API.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: 'https://weather-app-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/weather-dashboard',
      featured: false,
      stats: {
        stars: 34,
        forks: 8,
        users: '1.5k+'
      }
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with content management, user authentication, commenting system, and SEO optimization.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
      liveUrl: 'https://blog-platform-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/blog-platform',
      featured: false,
      stats: {
        stars: 28,
        forks: 7,
        users: '1k+'
      }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://portfolio-demo.vercel.app',
      githubUrl: 'https://github.com/rajat-thakur/portfolio',
      featured: false,
      stats: {
        stars: 22,
        forks: 5,
        users: '800+'
      }
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