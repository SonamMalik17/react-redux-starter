'use client';

import React, { useState, memo, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaDocker, FaGithub, FaFigma, FaNode, FaBootstrap, FaAws, FaJs, FaChevronDown } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiRedux, SiChakraui, SiJest, SiVercel, SiEslint, SiPrettier } from 'react-icons/si';
import { GiMaterialsScience } from "react-icons/gi";
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';
import { useTheme } from 'next-themes';

const iconMap = {
  FaJs,
  SiTypescript,
  FaReact,
  FaNodeJs,
  FaNode,
  SiNextdotjs,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  SiTailwindcss,
  FaDocker,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaAws,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiChakraui,
  SiJest,
  SiVercel,
  GiMaterialsScience,
  SiEslint,
  SiPrettier
};

// Animated skill level indicator component
const SkillLevel = memo(({ value, color }: { value: number; color: string }) => {
  return (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{
          type: "spring",
          stiffness: 50,
          delay: 0.1,
          duration: 1
        }}
      />
    </div>
  );
});

SkillLevel.displayName = 'SkillLevel';

// Interactive skill card component
const SkillCard = memo(({ 
  skill, 
  index, 
  categoryIndex, 
  isSelected, 
  onSelect
}: {
  skill: any;
  index: number;
  categoryIndex: number;
  isSelected: boolean;
  onSelect: (value: string | null) => void;
}) => {
  return (
    <motion.div
      className={`relative p-4 rounded-xl backdrop-blur-sm transition-all duration-300
        ${isSelected ? 'bg-card/90 shadow-xl' : 'bg-card/60'}
        flex flex-col border border-border`}
      style={isSelected ? {
        boxShadow: `0 8px 32px ${skill.color}33`,
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.05 + categoryIndex * 0.1
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(isSelected ? null : `${categoryIndex}-${index}`)}
      layoutId={`card-${categoryIndex}-${index}`}
    >
      {/* Icon with animated background */}
      <div className="mb-3 relative">
        <motion.div
          className="w-12 h-12 rounded-lg flex items-center justify-center relative z-10 bg-card"
          style={{
            border: `1px solid ${skill.color}33`
          }}
          animate={isSelected ? {
            y: [0, -5, 0],
            transition: {
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }
          } : {}}
        >
          {
            React.createElement(iconMap[skill.icon as keyof typeof iconMap] || (() => null), { 
              size: 32,
              style: { color: skill.color } 
            })
          }
        </motion.div>

        {/* Animated glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-xl z-0 opacity-0"
          animate={isSelected ? {
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.8],
            transition: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }
          } : {}}
          style={{
            background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
            filter: "blur(10px)"
          }}
        />
      </div>

      {/* Skill name and expertise level */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-medium text-card-foreground">
          {skill.name}
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{
            backgroundColor: `${skill.color}22`,
            color: skill.color
          }}
        >
          {skill.level}
        </span>
      </div>

      {/* Progress bar */}
      <SkillLevel value={skill.levelValue} color={skill.color} />

      {/* Expand indicator - shows on hover */}
      <motion.div 
        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        animate={isSelected ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaChevronDown 
          className="text-muted-foreground hover:text-card-foreground"
          style={{ color: isSelected ? skill.color : undefined }}
          size={16} 
        />
      </motion.div>

      {/* Expanding glow border on hover to indicate interactivity */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl opacity-0 pointer-events-none"
        initial={false}
        whileHover={{
          opacity: 0.5,
          transition: { duration: 0.3 }
        }}
        style={{
          background: `radial-gradient(circle at center, transparent 60%, ${skill.color}44 100%)`,
        }}
      />

      {/* Expanded content */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            className="mt-4 text-sm text-muted-foreground overflow-hidden"
          >
            <p>{skill.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

// Category tab component
const CategoryTab = memo(({ 
  category, 
  index, 
  isActive, 
  onSelect
}: {
  category: { title: string };
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden ${
        isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
      onClick={() => onSelect(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-accent rounded-lg -z-10"
          layoutId="activeTab"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {category.title}
    </motion.button>
  );
});

CategoryTab.displayName = 'CategoryTab';

// Floating 3D grid background component
const GridBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array(15).fill(0).map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-border rounded-xl"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2,
          }}
          animate={{
            rotateX: [0, 90, 180, 270, 360],
            rotateY: [0, 180, 360],
            z: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
});

GridBackground.displayName = 'GridBackground';

// Generate dynamic particles component
const Particles = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array(30).fill(0).map((_, i) => {
        const size = Math.random() * 5 + 1;
        // Use theme variables via CSS color variables 
        const colorClass = i % 5 === 0 ? "bg-chart-1" : 
                         i % 5 === 1 ? "bg-chart-2" : 
                         i % 5 === 2 ? "bg-chart-3" : 
                         i % 5 === 3 ? "bg-chart-4" : "bg-chart-5";

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${colorClass}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
});

Particles.displayName = 'Particles';

interface SkillSectionProps {
  // Add any props if needed in the future
}

// Main SkillSection component
const SkillSection: React.FC<SkillSectionProps> = () => {
  const [expandedCategory, setExpandedCategory] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle theme not being available during SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Parse the selected skill ID to get category and index
  const getSelectedSkillDetails = () => {
    if (!selectedSkill) return null;
    
    const [categoryIndex, skillIndex] = selectedSkill.split('-').map(Number);
    return { categoryIndex, skillIndex };
  };

  // Only re-render skills when necessary
  const selectedDetails = getSelectedSkillDetails();

  return (
    <section className="py-12 md:py-24 relative bg-background text-foreground overflow-hidden">
      {/* Animated backgrounds */}
      <GridBackground />
      <Particles />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with animated underline */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold inline-block relative"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {uiText.skills.title}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>

          <motion.p
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {uiText.skills.description}
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {Object.keys(userData.skills).map((categoryKey, index) => (
            <CategoryTab
              key={index}
              category={{ title: uiText.skills.categories[categoryKey as keyof typeof uiText.skills.categories] }}
              index={index}
              isActive={expandedCategory === index}
              onSelect={(idx) => {
                setExpandedCategory(idx);
                setSelectedSkill(null); // Reset selected skill when changing categories
              }}
            />
          ))}
        </motion.div>

        {/* Skills grid with animated transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={expandedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {Object.values(userData.skills)[expandedCategory].map((skill, index) => (
              <div key={`${expandedCategory}-${index}`} className="group">
                <SkillCard
                  skill={skill}
                  index={index}
                  categoryIndex={expandedCategory}
                  isSelected={selectedSkill === `${expandedCategory}-${index}`}
                  onSelect={setSelectedSkill}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillSection;