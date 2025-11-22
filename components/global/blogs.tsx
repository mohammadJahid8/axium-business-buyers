'use client';

import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredInsights = [
  {
    title:
      'How to Buy a Business in Australia: A Complete Strategic Guide for Serious Buyers',
    description:
      'Step-by-step strategies for navigating the Australian market, from initial search to closing the deal successfully.',
    readTime: '10 min read',
    image: '/buy-business.png',
    slug: 'buy-business-australia-guide',
  },
  {
    title:
      '7 Critical Mistakes That Can Destroy Your Business Purchase in Australia',
    description:
      'Avoid costly errors during the acquisition process by understanding the most common pitfalls Australian business buyers face.',
    readTime: '10 min read',
    image: '/mistakes.png',
    slug: 'mistakes-business-purchase-australia',
  },
];

const popularNews = [
  {
    title:
      'The Ultimate Due Diligence Guide When Buying A Business In Australia',
    description:
      'Learn exactly what to look for in financial records, legal documents, and operational metrics before signing any contracts.',
    readTime: '10 min read',
    image: '/guide.png',
    slug: 'ultimate-due-diligence-guide',
  },

  {
    title:
      'Common Mistakes When Buying A Business In Australia (And How To Avoid Them)',
    description:
      'Protect your investment by learning how to spot red flags and negotiate better terms during your business purchase.',
    readTime: '10 min read',
    image: '/common-mistakes.png',
    slug: 'common-mistakes-buying-business',
  },
  {
    title: 'How To Find The Right Business To Buy In Australia',
    description:
      'A comprehensive guide to identifying and evaluating profitable business opportunities across Australia that align with your goals.',
    readTime: '10 min read',
    image: '/find-business.png',
    slug: 'find-business-australia',
  },
];

function InsightsSection() {
  return (
    <section className='py-20 bg-background relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-background to-background' />
      <div className='absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='space-y-4 max-w-3xl mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading'
          >
            Insights for <span className='text-secondary'>Business Buyers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-base md:text-lg text-muted-foreground max-w-xl font-body'
          >
            Expert guidance and industry insights to help you make informed
            acquisition decisions in the Australian market.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
          <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {featuredInsights.map((insight, index) => (
              <div
                key={index}
                className='group relative flex flex-col h-full bg-card border border-border rounded-md overflow-hidden hover:shadow-lg transition-all duration-300'
              >
                {/* Image */}
                <div className='aspect-video relative overflow-hidden bg-muted'>
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    loading='lazy'
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>

                {/* Content */}
                <div className='p-5 flex flex-col grow'>
                  <div className='flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium'>
                    <FileText className='w-3 h-3' />
                    <span>{insight.readTime}</span>
                  </div>

                  <h3 className='text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 font-heading line-clamp-2'>
                    {insight.title}
                  </h3>

                  <p className='text-muted-foreground text-sm leading-relaxed mb-4 grow font-body line-clamp-3'>
                    {insight.description}
                  </p>

                  <Link
                    href={`/blog/${insight.slug}`}
                    className='flex items-center text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform duration-300 mt-auto'
                  >
                    Read Article{' '}
                    <ArrowRight className='ml-2 h-4 w-4 text-primary' />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Popular News */}
          <div className='lg:col-span-2'>
            <div className='space-y-4'>
              {popularNews.map((news, index) => (
                <Link
                  key={index}
                  href={`/blog/${news.slug}`}
                  className='group flex items-start gap-4 bg-card border border-border rounded-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer'
                >
                  <div className='w-24 h-24 relative rounded-md overflow-hidden bg-muted shrink-0'>
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                  <div className='flex flex-col gap-2 grow'>
                    <h4 className='text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors font-heading line-clamp-2'>
                      {news.title}
                    </h4>
                    <p className='text-xs text-muted-foreground line-clamp-2 font-body'>
                      {news.description}
                    </p>
                    <div className='flex items-center gap-2 justify-between'>
                      <div className='flex items-center gap-2 text-xs text-muted-foreground font-medium'>
                        <FileText className='w-3 h-3' />
                        <span>{news.readTime}</span>
                      </div>
                      <div className='flex items-center text-xs font-medium text-foreground group-hover:translate-x-1 transition-transform duration-300 mt-auto'>
                        Read Article{' '}
                        <ArrowRight className='ml-1 h-3 w-3 text-primary' />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
