import BlogSection from '@/components/global/blogs';
import ContactForm from '@/components/global/contact';
import WeHelpYou from '@/components/global/help';
import Hero from '@/components/global/hero';
import Lenis from '@/components/global/lenis';
import ProcessSteps from '@/components/global/process-steps';
import Testimonials from '@/components/global/testimonials';
import WhyChoose from '@/components/global/why';
import WhoWeWorkWith from '@/components/global/work';

export default function Home() {
  return (
    <main>
      <Lenis>
        <Hero />
        <WeHelpYou />
        <ProcessSteps />
        <WhoWeWorkWith />
        <WhyChoose />
        <Testimonials />
        <BlogSection />
        <ContactForm />
      </Lenis>
    </main>
  );
}
