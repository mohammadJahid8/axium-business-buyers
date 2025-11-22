'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Search,
  TrendingUp,
  Handshake,
  FileCheck,
  Rocket,
} from 'lucide-react';
import IconComponent from './icon';
import CTAButton from './cta-button';
import ContactModal from './contact-modal';

const steps = [
  {
    number: '01',
    title: 'Independent Advice',
    description:
      'We define what you want to buy, your budget, risk tolerance, and return goals.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Business Search',
    description:
      'We find and qualify potential businesses through our network, databases, and off-market connections.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Analysis & Valuation',
    description:
      'We review financials, performance drivers, and growth potential.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Negotiation & Offer',
    description:
      'We negotiate directly with the broker or owner to secure the best possible deal for you.',
    icon: Handshake,
  },
  {
    number: '05',
    title: 'Due Diligence & Settlement',
    description:
      'We coordinate with accountants and lawyers to ensure a smooth and safe acquisition.',
    icon: FileCheck,
  },
  {
    number: '06',
    title: 'Transition & Handover',
    description:
      'We guide the transition of everything across to you and ensure you receive an adequate handover.',
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className='relative py-20 bg-muted/10 overflow-hidden'>
      {/* Background grid pattern */}
      <div className='absolute opacity-50 inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-size-[6rem_6rem] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]' />

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-10 md:text-center'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading'>
            Our <span className='text-secondary'>Business Buying</span> Process
          </h2>
          <p className='text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-body'>
            Buying a business is complex, but we make it simple.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='max-w-5xl mx-auto'>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative'
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 mb-4 md:mb-16 items-center ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className='bg-card border border-border/80 hover:border-secondary/50 backdrop-blur-sm md:p-8 p-6 group hover:shadow-md transition-all duration-300 rounded-md'
                    >
                      <div
                        className={`flex items-start gap-4 ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className='shrink-0'>
                          <IconComponent icon={Icon} />
                        </div>
                        <div
                          className={`flex-1 ${isEven ? 'md:text-right' : ''}`}
                        >
                          <h3 className='text-xl font-semibold text-foreground mb-2 font-heading'>
                            {step.title}
                          </h3>
                          <p className='text-muted-foreground leading-relaxed font-body'>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Number Badge */}
                  <div
                    className={`hidden md:flex justify-center  ${
                      isEven ? 'md:col-start-2' : 'md:col-start-1'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className='relative'
                    >
                      <div className='w-16 h-16 bg-card flex items-center justify-center border border-border rounded-md'>
                        <span className='text-2xl font-bold text-foreground font-heading'>
                          {step.number}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-16 max-w-xs mx-auto'
        >
          <ContactModal>
            <CTAButton>Find Your Next Business</CTAButton>
          </ContactModal>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;
