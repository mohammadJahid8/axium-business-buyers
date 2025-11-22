'use client';

import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CTAButton = ({ children, className, ...props }: CTAButtonProps) => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div
        className='relative z-0 overflow-hidden p-[2px] flex items-center justify-center rounded-md hover:scale-105 transition duration-300 active:scale-100 group'
        style={{
          background:
            'conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF)',
          backgroundSize: '300% 300%',
          animation: 'shine 6s ease-out infinite',
        }}
      >
        <button
          className={cn(
            'relative cursor-pointer z-10 px-8 py-3 text-sm md:text-base text-white rounded-md font-medium bg-primary/90 backdrop-blur-sm w-full h-full',
            className
          )}
          {...props}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default CTAButton;
