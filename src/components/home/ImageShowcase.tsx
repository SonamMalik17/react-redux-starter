'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageShowcase = () => {
  const images = [
    {
      src: '/images/big-ben-london.jpg',
      alt: 'Big Ben in London',
      title: 'London Adventures',
    },
    {
      src: '/images/catherine-palace-russia.jpg',
      alt: 'Catherine Palace in Russia',
      title: 'Russian Architecture',
    },
    {
      src: '/images/city-park-path.jpg',
      alt: 'Peaceful city park path',
      title: 'Urban Nature',
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">
            Travel & Inspiration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some beautiful places that inspire my work and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-muted"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;