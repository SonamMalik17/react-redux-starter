import React from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Card } from "@/components/common/Card";
import { Input, Textarea, Label } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import type { Metadata } from "next";
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

export const metadata: Metadata = {
  title: userData.seo.pages.contact.title,
  description: userData.seo.pages.contact.description,
};


const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-16 pt-24 md:py-20 md:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-12 sm:text-5xl">{uiText.contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form Card */}
          <Card>
            <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2">{uiText.contact.sendMessage}</h2>
            <p className="text-sm text-muted-foreground mb-6">{uiText.contact.sendMessageDescription}</p>
            <form className="space-y-4">
                <div>
                  <Label htmlFor="name">{userData.contact.formLabels.name}</Label>
                  <Input id="name" placeholder={userData.contact.formPlaceholder.name} required />
                </div>
                <div>
                  <Label htmlFor="email">{userData.contact.formLabels.email}</Label>
                  <Input id="email" type="email" placeholder={userData.contact.formPlaceholder.email} required />
                </div>
                <div>
                  <Label htmlFor="subject">{userData.contact.formLabels.subject}</Label>
                  <Input id="subject" placeholder={userData.contact.formPlaceholder.subject} />
                </div>
                <div>
                  <Label htmlFor="message">{userData.contact.formLabels.message}</Label>
                  <Textarea id="message" placeholder={userData.contact.formPlaceholder.message} required rows={5} />
                </div>
                <Button type="submit" className="w-full" disabled>
                  {uiText.contact.formComingSoon}
                </Button>
              </form>
          </Card>

          {/* Contact Info Card */}
           <Card>
              <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2">{uiText.contact.contactInformation}</h2>
              <p className="text-sm text-muted-foreground mb-6">{uiText.contact.contactDescription}</p>
              <div className="space-y-4">
                 <div className="flex items-start space-x-3">
                    <FaEnvelope className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{uiText.contact.sections.email}</h4>
                      <a href={`mailto:${userData.personalInfo.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {userData.personalInfo.email}
                      </a>
                    </div>
                 </div>
                 <div className="flex items-start space-x-3">
                    <FaPhone className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{uiText.contact.sections.phone}</h4>
                      <a href={`tel:${userData.personalInfo.phone.replace(/\D/g, '')}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {userData.personalInfo.phone}
                      </a>
                    </div>
                 </div>
                 <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{uiText.contact.sections.location}</h4>
                      <p className="text-muted-foreground">
                        {userData.personalInfo.location}
                      </p>
                    </div>
                 </div>
                  <div className="flex items-start space-x-3">
                    <FaGithub className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{uiText.contact.sections.github}</h4>
                      <Link href={userData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        {userData.personalInfo.github.replace('https://', '')}
                      </Link>
                    </div>
                  </div>
                   {/* Add LinkedIn if available */}
                  {userData.personalInfo.linkedin && (
                    <div className="flex items-start space-x-3">
                       <FaLinkedin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                       <div>
                         <h4 className="font-semibold">{uiText.contact.sections.linkedin}</h4>
                         <Link href={userData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                           {userData.personalInfo.linkedin.replace('https://', '')}
                         </Link>
                       </div>
                     </div>
                  )}
              </div>
            </Card>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
 