import CTA from '@/components/global/cta';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <CTA />
    </main>
  );
}
