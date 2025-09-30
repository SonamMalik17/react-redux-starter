import React from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProjectGrid from "@/components/projects/ProjectGrid";
import type { Metadata } from "next";
import userData from '@/data/userData.json';

export const metadata: Metadata = {
  title: userData.seo.pages.projects.title,
  description: userData.seo.pages.projects.description,
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding top to offset fixed header */}
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
 