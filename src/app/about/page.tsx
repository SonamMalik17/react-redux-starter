import React from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card } from "@/components/common/Card";
import Image from "next/image";
import type { Metadata } from "next";
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

export const metadata: Metadata = {
  title: userData.seo.pages.about.title,
  description: userData.seo.pages.about.description,
};


const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-16 pt-24 md:py-20 md:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-12 sm:text-5xl">{uiText.about.title}</h1>

         <Card className="mb-12">
            <h2 className="text-2xl font-semibold leading-none tracking-tight mb-4">{uiText.about.biography}</h2>
            <div className="prose dark:prose-invert max-w-none">
                <p>
                {userData.personalInfo.description}
                </p>
                <p>
                 {userData.personalInfo.education} and have since gained practical experience building real-world applications. My focus is on writing clean, efficient, and maintainable code while ensuring a great user experience across all devices.
                </p>
                 <p>
                 {userData.personalInfo.additionalInfo}
                </p>
            </div>
         </Card>

         {/* Add sections for Timeline, Fun Facts, Skills, Resume Download */}
         <div className="text-center text-muted-foreground">
           <p>{uiText.about.comingSoon}</p>
           <p>{uiText.about.contactInfo} <a href={`mailto:${userData.personalInfo.email}`} className="text-accent hover:underline">{userData.personalInfo.email}</a> | Phone: {userData.personalInfo.phone}</p>
           <p>Location: {userData.personalInfo.location}</p>
         </div>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
 