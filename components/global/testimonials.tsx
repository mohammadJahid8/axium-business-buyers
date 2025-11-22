'use client';

import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      'I wanted to express my gratitude to Asif for his exceptional assistance. He worked diligently to provide me with all the necessary information, answering my questions thoroughly and professionally. His dedication and expertise were truly impressive. Thank you, Asif, for your outstanding support!',
    author: 'Kiran',
  },
  {
    quote:
      'Sadeq and his team are incredible. They are quite knowledgeable and diligent. Their service is incredible. All my communication were promptly responded to. All my questions and queries were satisfactorily addressed. Made the entire process smooth and assuring. Great team to have by your corner regardless what your needs are. Highly recommend Sadeq and his team.',
    author: 'Nik',
  },
  {
    quote:
      "The team's negotiation skills and level of service and commitment was unparalleled. Highly recommended!",
    author: 'Jason',
  },
  {
    quote:
      'Asif was amazing, bought the restaurant and really happy for all the services him and his team provided. Keep it up :)',
    author: 'Hatim',
  },
  {
    quote:
      "Professional, knowledgeable, and reliable — I couldn't have done it without Axium.",
    author: 'Brisbane Investor',
  },
];

const Testimonials = () => {
  return (
    <section className='py-20 bg-muted'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Client Success Stories
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body'>
            Hear from business owners who successfully acquired businesses with
            our guidance
          </p>
        </div>

        <div className='relative'>
          {/* Gradient Masks for Faded Edges */}
          <div className='absolute left-0 top-0 bottom-0 w-6 md:w-24 z-10 bg-linear-to-r from-muted to-transparent pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-6 md:w-24 z-10 bg-linear-to-l from-muted to-transparent pointer-events-none' />

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-4'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className='pl-4 md:basis-1/2 lg:basis-1/3'
                >
                  <div className='p-1 h-full'>
                    <Card className='h-full border-none shadow-sm bg-card/90 hover:bg-card transition-colors duration-300 py-0'>
                      <CardContent className='flex flex-col p-6 h-full'>
                        <div className='mb-4 text-primary'>
                          <Quote className='h-8 w-8 opacity-50' />
                        </div>

                        <div className='flex-1'>
                          <p className='text-base leading-relaxed text-muted-foreground mb-6'>
                            {testimonial.quote}
                          </p>
                        </div>

                        <div className='flex items-center justify-between mt-auto pt-4 border-t border-border/50'>
                          <p className='text-base font-semibold leading-none'>
                            {testimonial.author}
                          </p>

                          <div className='flex gap-0.5'>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className='h-4 w-4 fill-secondary text-secondary'
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='hidden md:block'>
              <CarouselPrevious className='-left-4 lg:-left-2 z-10' />
              <CarouselNext className='-right-4 lg:-right-2 z-10' />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
