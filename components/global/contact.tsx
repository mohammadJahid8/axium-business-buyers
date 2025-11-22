'use client';
import { motion } from 'framer-motion';
import Form from './form';
const ContactForm = () => {
  return (
    <section className='relative w-full py-20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 w-full h-full'>
        {/* Top dark section */}
        <div className='absolute top-0 left-0 w-full h-[60%] bg-muted/30 border-b border-border/10' />
        {/* Bottom lighter section */}
        <div className='absolute bottom-0 left-0 w-full h-[40%] bg-background' />

        {/* Grid pattern overlay for top section */}
        <div className='absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
      </div>

      <div className='max-w-7xl relative z-10 mx-auto px-4'>
        {/* Header Content */}
        <div className='md:text-center mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading'
          >
            Start Your{' '}
            <span className='text-secondary'>Acquisition Journey</span> Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-base md:text-lg text-muted-foreground leading-relaxed font-body'
          >
            Book a confidential consultation with our business acquisition
            specialists
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto bg-card/95 border border-border p-6 md:p-10 rounded-md'
        >
          <div className='text-center'>
            <h3 className='text-2xl font-semibold text-card-foreground font-heading'>
              Send Us Message
            </h3>

            <Form />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
