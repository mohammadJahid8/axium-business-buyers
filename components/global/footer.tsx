'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError('');
    setIsSuccess(false);

    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://api.nexartechnologies.com/api/v1/subscribe/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            businessUnit: 'Axium',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again.');
      }

      // Success
      setIsSuccess(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className='bg-primary text-primary-foreground border-t border-primary-foreground/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Brand & Newsletter Column (Span 4) */}
          <div className='lg:col-span-4 space-y-8'>
            <div>
              {/* <h3 className='text-2xl font-bold font-heading mb-4'>Axium</h3> */}
              <Link href='/'>
                <Image src='/axium.png' alt='logo' width={100} height={100} />
              </Link>
              <p className='text-primary-foreground/70 font-body leading-relaxed max-w-sm mt-6'>
                Your strategic partner in buying businesses across Australia. We
                provide expert guidance from initial search through to
                settlement.
              </p>
            </div>

            {/* Newsletter */}
            <div className='space-y-4'>
              <h4 className='font-semibold font-heading'>
                Subscribe to our newsletter
              </h4>
              <form onSubmit={handleSubscribe} className='space-y-2'>
                <div className='flex gap-2 max-w-sm'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSuccess}
                    className='bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary/20 h-10'
                  />
                  <Button
                    type='submit'
                    size='icon'
                    disabled={isLoading || isSuccess}
                    className='bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0'
                  >
                    {isLoading ? (
                      <Loader2 className='h-4 w-4 animate-spin' />
                    ) : isSuccess ? (
                      <Check className='h-4 w-4' />
                    ) : (
                      <ArrowRight className='h-4 w-4' />
                    )}
                  </Button>
                </div>
                {error && (
                  <p className='text-red-400 text-sm font-body'>{error}</p>
                )}
                {isSuccess && (
                  <p className='text-green-400 text-sm font-body'>
                    Successfully subscribed! Thank you.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Links Grid (Span 8) */}
          <div className='lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:pl-12'>
            {/* Services */}
            <div>
              <h4 className='text-lg font-bold font-heading mb-6 text-secondary'>
                Services
              </h4>
              <ul className='space-y-3 font-body'>
                {[
                  'Business Search',
                  'Due Diligence',
                  'Negotiation Support',
                  'Post-Acquisition',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='text-primary-foreground/70 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className='text-lg font-bold font-heading mb-6 text-secondary'>
                Locations
              </h4>
              <ul className='space-y-3 font-body'>
                {[
                  'Melbourne',
                  'Sydney',
                  'Adelaide',
                  'Perth',
                  'Brisbane',
                  'Gold Coast',
                ].map((city) => (
                  <li key={city}>
                    <a
                      href='#'
                      className='text-primary-foreground/70 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group'
                    >
                      Buy a Business {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className='text-lg font-bold font-heading mb-6 text-secondary'>
                Contact Us
              </h4>
              <ul className='space-y-4 font-body'>
                <li className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-secondary shrink-0 mt-0.5' />
                  <div className='text-primary-foreground/70 space-y-1'>
                    <p>101 Moray Street</p>
                    <p>South Melbourne, VIC 3205</p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-secondary shrink-0 mt-0.5' />
                  <div className='text-primary-foreground/70 space-y-1'>
                    <p>388 George St</p>
                    <p>Sydney, NSW 2000</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-primary-foreground/10 bg-black/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <p className='text-sm text-primary-foreground/50 font-body text-center'>
            © {new Date().getFullYear()} Axium Business Buyers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
