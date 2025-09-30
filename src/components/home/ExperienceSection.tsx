'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface ExperienceSectionProps {
  // Add any props if needed in the future
}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{uiText.experience.title}</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {userData.experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="border border-border p-4 rounded-lg cursor-pointer bg-card text-card-foreground hover:shadow-lg"
                onClick={() => setSelectedExperience(index)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold">{experience.company}</h3>
                <p className="text-sm">{experience.position}</p>
                <p className="text-xs text-muted-foreground">{experience.duration}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="border border-border p-4 rounded-lg bg-card text-card-foreground"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {selectedExperience !== null && (
                <motion.div
                  key={selectedExperience}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold">{userData.experiences[selectedExperience].company}</h3>
                  <p className="text-sm">{userData.experiences[selectedExperience].position}</p>
                  <p className="text-xs text-muted-foreground">{userData.experiences[selectedExperience].duration}</p>
                  <ul className="list-disc list-inside mt-2">
                    {userData.experiences[selectedExperience].description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;