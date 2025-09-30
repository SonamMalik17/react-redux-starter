'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { FaExternalLinkAlt, FaGithub, FaUser, FaCode } from "react-icons/fa";
import type { Project } from '@/data/projects';
import Link from "next/link";
import uiText from '@/data/uiText.json';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Better tech icon mapping with actual React Icons
const techIconMap: Record<string, React.ReactNode> = {
  'React': <span className="text-blue-400">⚛️</span>,
  'Next.js': <span className="text-gray-800 dark:text-white">▲</span>,
  'Angular': <span className="text-red-500">🅰️</span>,
  'TypeScript': <span className="text-blue-600">TS</span>,
  'JavaScript': <span className="text-yellow-500">JS</span>,
  'MongoDB': <span className="text-green-500">🍃</span>,
  'SQL': <span className="text-blue-700">🛢️</span>,
  'Express': <span className="text-gray-600">⚡</span>,
  'Material UI': <span className="text-blue-500">MUI</span>,
  'Tailwind CSS': <span className="text-cyan-400">🎨</span>,
  'i18n': <span className="text-purple-500">🌍</span>,
  'Node.js': <span className="text-green-600">🚀</span>,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:border-accent/50">
        {/* Gradient overlay for better visual hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Image Section - Smaller and more modern */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={project.imageUrl || `https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/600/300`}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Action buttons overlay */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {project.liveUrl && (
              <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="h-3 w-3 text-gray-700" />
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white" asChild>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-3 w-3 text-gray-700" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Content Section - More spacious and organized */}
        <div className="p-6 space-y-4">
          {/* Title and Role */}
          <div>
            <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaUser className="h-3 w-3" />
              <span>{project.role}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description.length > 120
              ? `${project.description.substring(0, 120)}...`
              : project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaCode className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wide">
                {uiText.projects.projectCard.techStack}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 bg-muted/60 hover:bg-muted transition-colors">
                  <span className="mr-1">{techIconMap[tech] || '🔹'}</span>
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{project.stack.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons - Bottom */}
          <div className="flex gap-3 pt-2">
            {project.liveUrl && (
              <Button variant="default" size="sm" className="flex-1" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="mr-2 h-3 w-3" />
                  {uiText.projects.projectCard.liveDemo}
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-3 w-3" />
                  {uiText.projects.projectCard.code}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
 