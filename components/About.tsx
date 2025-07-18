'use client';

import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Card } from './ui/Card';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Summary</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a passionate Full Stack Developer with 3+ years of experience in building scalable 
              web applications. I specialize in React.js, Node.js, and modern JavaScript frameworks, 
              with expertise in both frontend and backend development, cloud technologies, and DevOps practices.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My technical expertise includes React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, 
              AWS, Docker, and Kubernetes. I'm passionate about creating efficient, maintainable code and 
              implementing best practices in software development and DevOps.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I have experience working with agile methodologies, leading development teams, and 
              delivering high-quality software solutions. I'm always eager to learn new technologies 
              and contribute to innovative projects that make a positive impact.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Role</p>
                    <p className="font-medium text-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Experience</p>
                    <p className="font-medium text-foreground">3+ Years</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Award className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Projects</p>
                    <p className="font-medium text-foreground">25+ Completed</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Personal Background */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Personal Background</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-foreground/80 leading-relaxed mb-6">
                My journey into software development began with a strong foundation in computer science 
                and a passion for creating innovative digital solutions. I've had the opportunity to work 
                on diverse projects ranging from e-commerce platforms to enterprise applications, always 
                focusing on delivering high-quality, scalable solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I believe in continuous learning and staying updated with the latest industry trends. 
                My experience includes working with modern development practices, implementing CI/CD 
                pipelines, and optimizing application performance for better user experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I'm passionate about clean code, best practices, and creating solutions that not only 
                meet business requirements but also provide excellent user experiences. I enjoy 
                collaborating with cross-functional teams and contributing to the entire software 
                development lifecycle.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}