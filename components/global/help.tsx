'use client';

import { motion } from 'framer-motion';

import {
  Eye,
  FileSearch,
  DollarSign,
  ShieldAlert,
  Users,
  ArrowLeftRight,
} from 'lucide-react';
import IconComponent from './icon';

const features = [
  {
    icon: Eye,
    title: 'Source on-market and off-market opportunities',
    description:
      'Access exclusive business opportunities not available to the general public.',
  },
  {
    icon: FileSearch,
    title: 'Due Conduct independent valuations and due diligence',
    description:
      'Professional assessment to ensure you make informed decisions.',
  },
  {
    icon: DollarSign,
    title: 'Negotiate the best price and terms',
    description: 'Expert negotiation to secure favorable purchase conditions.',
  },
  {
    icon: ShieldAlert,
    title: 'Avoid costly mistakes and emotional decisions',
    description:
      'Objective guidance to prevent expensive errors in the buying process.',
  },
  {
    icon: Users,
    title: 'Connect with finance, legal, and accounting specialists',
    description: 'Access to our network of trusted professional advisors.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Navigate through to settlement & transition',
    description:
      'We help you effectively settle and transition into your new business.',
  },
];

function WhyChooseUs() {
  return (
    <section className='py-20 bg-background text-foreground relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8 relative z-10'>
        <div className='mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading'
          >
            Why Use a <br />
            <span className='text-secondary'>Business Buyer&apos;s Agent?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-base md:text-lg text-muted-foreground leading-relaxed font-body'
          >
            Most people think of brokers as only working for sellers, but
            business buyers need representation too.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-base md:text-lg text-muted-foreground mb-8 leading-relaxed font-body'
          >
            When you buy a business directly from a seller or broker,
            you&apos;re negotiating against professionals who represent the
            other side.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-black font-bold font-heading text-base md:text-lg'
          >
            At Axium, we represent you, the buyer. Here&apos;s how we help you:
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative md:p-8 p-6 rounded-md bg-card border border-border/80 hover:border-secondary/50 transition-all duration-300 overflow-hidden hover:shadow-md'
            >
              <div className='absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <div className='relative z-10 h-full flex flex-col'>
                <IconComponent icon={feature.icon} />

                <h3 className='text-xl font-semibold text-foreground mb-3 font-heading'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed text-base grow font-body'>
                  {feature.description}
                </p>

                {/* Decorative elements for the large card */}
                {index === 0 && (
                  <div className='absolute right-0 bottom-0 w-64 h-64 bg-linear-to-tl from-secondary/5 to-transparent rounded-tl-full opacity-50 pointer-events-none' />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
