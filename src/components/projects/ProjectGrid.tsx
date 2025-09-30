'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/DropdownMenu';
import { projects, type Project } from '@/data/projects';
import { FaFilter, FaSearch } from 'react-icons/fa';
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

interface ProjectGridProps {
  // Add any props if needed in the future
}

const allTech = Array.from(new Set(projects.flatMap(p => p.stack)));

const ProjectGrid: React.FC<ProjectGridProps> = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTechChange = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = projects.filter(project => {
    const matchesTech = selectedTech.length === 0 || selectedTech.every(tech => project.stack.includes(tech));
    const matchesSearch = searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTech && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl"
      >
        {uiText.projects.title}
      </motion.h2>
      <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto"
      >
        {uiText.projects.description}
      </motion.p>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder={uiText.projects.searchPlaceholder}
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <DropdownMenu
          trigger={
            <Button variant="outline">
              <FaFilter className="mr-2 h-4 w-4" /> {uiText.projects.filterByTech}
            </Button>
          }
          className="w-56"
        >
          <DropdownMenuLabel>{uiText.projects.technologies}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {allTech.sort().map(tech => (
            <DropdownMenuCheckboxItem
              key={tech}
              checked={selectedTech.includes(tech)}
              onCheckedChange={() => handleTechChange(tech)}
            >
              {tech}
            </DropdownMenuCheckboxItem>
          ))}
          {selectedTech.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <div onClick={() => setSelectedTech([])} className="text-destructive cursor-pointer px-2 py-1.5 text-sm">
                {uiText.projects.clearFilters}
              </div>
            </>
          )}
        </DropdownMenu>
      </div>


      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 p-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug || index} project={project} index={index} />
          ))}
        </motion.div>
      ) : (
         <p className="text-center text-muted-foreground mt-12">{uiText.projects.noProjectsFound}</p>
      )}
    </section>
  );
};

export default ProjectGrid;
 