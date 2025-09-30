'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import userData from '@/data/userData.json';
import uiText from '@/data/uiText.json';

interface HeroSectionProps {
  // Add any props if needed in the future
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenTitles = 1500;

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = userData.titles[index];
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentTitle) {
        // Pause at end of title
        setTimeout(() => setIsDeleting(true), delayBetweenTitles);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % userData.titles.length);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, index]);

  // Motion Background Logic (Simple Gradient Example)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <section className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden text-center">
       {/* Dynamic Background */}
       <motion.div
         className="absolute inset-0 z-[-1] bg-gradient-radial from-accent/10 via-background to-background"
         style={{
           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.15), hsl(var(--background)), hsl(var(--background)))`,
         }}
         transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
       />
       {/* Add more complex background elements here if desired (e.g., blobs) */}


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="z-10 px-4"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-accent">{userData.personalInfo.name}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl h-8">
          A <span className="font-semibold text-foreground">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </p>
        <p className="mt-6 max-w-xl mx-auto text-base text-muted-foreground sm:text-lg md:text-xl">
          {userData.personalInfo.bio}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">{uiText.hero.ctaButtons.viewWork}</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/contact">{uiText.hero.ctaButtons.getInTouch}</Link>
          </Button>
        </div>
      </motion.div>

       {/* Scroll Down Indicator */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
       >
         <FaArrowDown className="h-6 w-6 text-muted-foreground" />
       </motion.div>
    </section>
  );
};

export default HeroSection;
 