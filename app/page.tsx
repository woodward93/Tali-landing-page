import { Metadata } from 'next';
import { TaliHero } from '@/components/landing/hero';
import { TaliFeatures } from '@/components/landing/features';
import { TaliHowItWorks } from '@/components/landing/how-it-works';
import { TaliTestimonials } from '@/components/landing/testimonials';
import { TaliPricing } from '@/components/landing/pricing';
import { TaliFooter } from '@/components/landing/footer';
import { TaliHeader } from '@/components/landing/header';

export const metadata: Metadata = {
  title: 'Tali - Simplify Your Bookkeeping',
  description: 'Streamline income, expenses & reporting in one app. Track finances, generate reports, and access your data from anywhere.',
  keywords: 'bookkeeping, finance, accounting, small business, SaaS, financial reporting',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TaliHeader />
      <main className="flex-1">
        <TaliHero />
        <TaliFeatures />
        <TaliHowItWorks />
        <TaliTestimonials />
        <TaliPricing />
      </main>
      <TaliFooter />
    </div>
  );
}