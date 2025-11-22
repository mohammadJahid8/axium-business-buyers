import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps {
  icon: LucideIcon;
  className?: string;
}

const IconComponent = ({ icon: Icon, className }: IconProps) => {
  return (
    <div
      className={cn(
        'md:w-12 md:h-12 w-10 h-10 rounded-md bg-secondary/10 border border-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-secondary',
        className
      )}
    >
      <Icon className='md:w-6 md:h-6 w-5 h-5 transition-colors' />
    </div>
  );
};

export default IconComponent;
