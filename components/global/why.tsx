'use client';

import { motion } from 'framer-motion';

import { Award, ShieldCheck, Target, Users2 } from 'lucide-react';
import { useRef } from 'react';
import IconComponent from './icon';
import CTAButton from './cta-button';
import ContactModal from './contact-modal';

const reasons = [
  {
    icon: Award,
    title: 'Expertise & Experience',
    description:
      'Our team has years of experience in business acquisitions across multiple industries.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential & Discreet',
    description:
      'All enquiries are managed professionally and with full confidentiality.',
  },
  {
    icon: Target,
    title: 'Tailored Opportunities',
    description:
      'Access to off-market businesses and high-potential investments.',
  },
  {
    icon: Users2,
    title: 'End-to-End Support',
    description: 'From search to settlement, we guide you through every step.',
  },
];

function WhyInvestorsChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className='py-20 bg-background relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-muted/20 via-background to-background' />
      <div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50' />
      <div className='absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 items-center'>
          {/* Left Side: Sticky Header */}
          <div className='lg:w-1/3 w-full'>
            <div>
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading'
                >
                  Why Investors Choose{' '}
                  <span className='text-secondary'>Axium</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md font-body'
                >
                  We bridge the gap between ambition and acquisition, providing
                  the expertise and access needed to secure your ideal business.
                </motion.p>
                <div className='max-w-xs'>
                  <ContactModal>
                    <CTAButton>Start Your Journey</CTAButton>
                  </ContactModal>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The List */}
          <div className='lg:w-2/3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {reasons.map((reason) => (
                <ReasonCard key={reason.title} reason={reason} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }: { reason: (typeof reasons)[0] }) {
  return (
    <div className='group relative bg-card md:p-8 p-6 rounded-md border border-border hover:shadow-lg transition-all duration-300'>
      <IconComponent icon={reason.icon} />

      {/* Content */}
      <h3 className='text-xl font-semibold text-foreground mb-2 font-heading'>
        {reason.title}
      </h3>
      <p className='text-muted-foreground leading-relaxed font-body'>
        {reason.description}
      </p>
    </div>
  );
}

export default WhyInvestorsChooseSection;
