import userData from './userData.json';

export interface Project {
  title: string;
  slug?: string; // Optional slug for detailed page routes
  description: string;
  role: string;
  stack: string[];
  imageUrl?: string; // Optional image URL
  liveUrl?: string; // Optional live demo URL
  repoUrl?: string; // Optional repository URL
  features: string[];
  impact?: string;
}

export const projects: Project[] = userData.projects;

// Create placeholder image directories/files if they don't exist
// Example command (run in terminal):
// mkdir -p public/images/projects && touch public/images/projects/getstatus-mockup.png public/images/projects/hrms-mockup.png public/images/projects/bibico-mockup.png
 