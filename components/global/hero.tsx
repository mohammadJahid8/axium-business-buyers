'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ContactModal from './contact-modal';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Image with Parallax & Zoom */}
      <motion.div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(/hero-skyline.png)`,
          y: y,
          scale: 1.1,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <div className='absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/60' />
        <div className='absolute inset-0 bg-linear-to-b from-transparent/40 via-transparent/40 to-background/15' />
      </motion.div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight'>
            Your Strategic Partner in <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-secondary via-white to-secondary bg-size-[200%_auto] animate-gradient'>
              Buying Businesses
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className='text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 font-body leading-relaxed'
        >
          Axium Business Buyers helps aspiring and current business owners find,
          evaluate, and acquire the right businesses in Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <ContactModal>
            <Button
              variant='secondary'
              size='lg'
              className='w-max sm:w-auto group cursor-pointer'
            >
              Start Your Acquisition Journey
              <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
          </ContactModal>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className='flex flex-col items-center gap-2'>
          <span className='text-xs uppercase tracking-widest text-primary-foreground/60 font-medium'>
            Scroll
          </span>
          <div className='w-px h-12 bg-linear-to-b from-primary-foreground/0 via-primary-foreground/50 to-primary-foreground/0' />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
