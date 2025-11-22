import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Form = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    budget: '',
    timeline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success message
      toast({
        title: 'Consultation Request Received',
        description:
          "We'll contact you within 24 hours to discuss your acquisition goals.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: '',
        budget: '',
        timeline: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-2 md:col-span-2'>
          <Label
            htmlFor='name'
            className='text-muted-foreground text-xs uppercase tracking-wider'
          >
            Full Name <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Full Name'
            className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <Label
            htmlFor='email'
            className='text-muted-foreground text-xs uppercase tracking-wider'
          >
            Email <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
            required
          />
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='phone'
            className='text-muted-foreground text-xs uppercase tracking-wider'
          >
            Phone Number <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='phone'
            name='phone'
            type='tel'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone'
            className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <Label
            htmlFor='industry'
            className='text-muted-foreground text-xs uppercase tracking-wider'
          >
            Industry Interest
          </Label>
          <Input
            id='industry'
            name='industry'
            value={formData.industry}
            onChange={handleChange}
            placeholder='e.g., Hospitality'
            className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
          />
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='budget'
            className='text-muted-foreground text-xs uppercase tracking-wider'
          >
            Budget
          </Label>
          <Input
            id='budget'
            name='budget'
            value={formData.budget}
            onChange={handleChange}
            placeholder='e.g., $500k - $1M'
            className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label
          htmlFor='timeline'
          className='text-muted-foreground text-xs uppercase tracking-wider'
        >
          Timeline to Buy
        </Label>
        <Input
          id='timeline'
          name='timeline'
          value={formData.timeline}
          onChange={handleChange}
          placeholder='e.g., Within 6 months'
          className='border-input focus:border-ring text-foreground placeholder:text-muted-foreground rounded-sm h-12'
        />
      </div>

      <Button
        type='submit'
        disabled={isLoading}
        className='w-full cursor-pointer h-12 rounded-md text-base font-medium transition-all duration-300'
      >
        {isLoading ? 'Sending...' : 'Book a Confidential Consultation'}
      </Button>
    </form>
  );
};

export default Form;
