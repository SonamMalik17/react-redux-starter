import React from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillSection from "@/components/home/SkillSection";
import ImageShowcase from "@/components/home/ImageShowcase";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import uiText from '@/data/uiText.json';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillSection/>
        <ExperienceSection/>
        <ImageShowcase />

        {/* Optionally include a *preview* of projects or just link to the main projects page */}
        <div className="py-16 bg-secondary">
           <ProjectGrid /> {/* Display the full grid or a limited subset */}
           {/* Or Add a section linking to the full projects page */}
            {/* <section className="container mx-auto px-4 md:px-6 py-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{uiText.projects.home.title}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {uiText.projects.home.description}
              </p>
              <Button asChild size="lg">
                <Link href="/projects">
                  {uiText.projects.home.seeAllProjects} <FaArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </section> */}
        </div>

        {/* Add other sections like About Me preview, Skills highlight etc. here */}

      </main>
      <Footer />
    </div>
  );
};

export default Home;
 