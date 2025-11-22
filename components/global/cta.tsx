'use client';

import { ArrowRightIcon } from 'lucide-react';
import ContactModal from './contact-modal';
import CTAButton from './cta-button';

const CTA = () => {
  return (
    <section className='mx-auto px-4 sm:px-6 md:px-8 max-w-7xl my-10'>
      <div className='flex flex-col items-center justify-center w-full text-center rounded-md py-14 bg-slate-100/70'>
        <h1 className='text-2xl md:text-3xl font-semibold text-slate-900 max-w-2xl my-5 font-heading'>
          Ready to find the perfect business opportunity in Australia?
        </h1>
        <ContactModal>
          <CTAButton className='flex items-center gap-2'>
            <span>Talk to an expert</span>
            <ArrowRightIcon className='w-4 h-4' />
          </CTAButton>
        </ContactModal>
      </div>
    </section>
  );
};

export default CTA;
