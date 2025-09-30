import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/common/Button";
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

interface FooterProps {
  // Add any props if needed in the future
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; {currentYear} {userData.personalInfo.name}. {uiText.footer.rightsReserved}</p>
          <p className="text-sm text-muted-foreground">
            {uiText.footer.builtWith}
          </p>
        </div>
        <div className="flex space-x-4">
           <Button variant="ghost" size="icon" asChild>
             <Link href={userData.personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label={uiText.ariaLabels.githubProfile}>
               <FaGithub className="h-5 w-5" />
             </Link>
           </Button>
           {/* Add LinkedIn if available */}
           {userData.personalInfo.linkedin && (
             <Button variant="ghost" size="icon" asChild>
               <Link href={userData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label={uiText.ariaLabels.linkedinProfile}>
                 <FaLinkedin className="h-5 w-5" />
               </Link>
             </Button>
           )}
           <Button variant="ghost" size="icon" asChild>
             <Link href={`mailto:${userData.personalInfo.email}`} aria-label={uiText.ariaLabels.emailUser.replace('{name}', userData.personalInfo.name)}>
               <FaEnvelope className="h-5 w-5" />
             </Link>
           </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 