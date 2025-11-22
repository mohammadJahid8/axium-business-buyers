'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  Palmtree,
  Globe,
  Building2,
  Maximize2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import IconComponent from './icon';

const clients = [
  {
    icon: Briefcase,
    title: 'First-time business buyers',
    description:
      'New entrepreneurs looking to enter the business world with confidence.',
    gradient: 'from-blue-500/20 via-transparent to-transparent',
    iconColor: 'text-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Experienced operators expanding portfolios',
    description:
      'Seasoned business owners seeking to grow their investment portfolio.',
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Palmtree,
    title: 'Corporate professionals seeking lifestyle businesses',
    description:
      'Professionals transitioning to business ownership for lifestyle change.',
    gradient: 'from-amber-500/20 via-transparent to-transparent',
    iconColor: 'text-amber-500',
  },
  {
    icon: Globe,
    title: 'Investors and migration buyers',
    description:
      'Investment-focused buyers and those seeking migration pathways.',
    gradient: 'from-purple-500/20 via-transparent to-transparent',
    iconColor: 'text-purple-500',
  },
  {
    icon: Building2,
    title: 'Private equity and high-net-worth clients',
    description:
      'Sophisticated investors looking for strategic business acquisitions.',
    gradient: 'from-rose-500/20 via-transparent to-transparent',
    iconColor: 'text-rose-500',
  },
  {
    icon: Maximize2,
    title: 'Expansion Operators',
    description:
      'Business owners looking to rollup or expand their existing operations.',
    gradient: 'from-cyan-500/20 via-transparent to-transparent',
    iconColor: 'text-cyan-500',
  },
];

function WhoWeWorkWithSection() {
  return (
    <section className='py-20 bg-primary relative overflow-hidden'>
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 opacity-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px]' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading text-white'
          >
            Who We <span className='text-secondary'>Work With</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-700'>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group relative border-r border-b border-zinc-700 p-6 md:p-8 hover:bg-zinc-900/30 transition-colors duration-500'
            >
              {/* Hover Gradient */}
              <div
                className={cn(
                  'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br',
                  client.gradient
                )}
              />

              <div className='relative z-10 h-full flex flex-col justify-between'>
                <div>
                  <IconComponent
                    icon={client.icon}
                    className={cn(
                      'mb-6 inline-flex p-3 rounded-lg bg-zinc-900/50 ring-1 ring-zinc-700',
                      client.iconColor
                    )}
                  />

                  <h3 className='text-2xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300'>
                    {client.title}
                  </h3>
                  <p className='text-zinc-400 leading-relaxed'>
                    {client.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className='text-white font-medium text-center py-4 leading-relaxed text-base md:text-lg font-body'>
          No matter your background, we tailor our approach to your goals,
          budget, and risk profile.
        </p>
      </div>
    </section>
  );
}

export default WhoWeWorkWithSection;
