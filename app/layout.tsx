import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tali - Free Business Bookkeeping App in Nigeria | Sales & Inventory Management',
    template: '%s | Tali Business Management'
  },
  description: 'Free business bookkeeping app in Nigeria. Record sales & expenses, manage stock, generate receipts & invoices. Simple, secure cloud-based solution with AI insights for Nigerian businesses.',
  keywords: 'bookkeeping app Nigeria, record sales, record expenses, manage stock, receipts, invoices, business management Nigeria, inventory tracking, financial reporting, business analytics, AI insights, cloud accounting Nigeria',
  openGraph: {
    title: 'Tali - Free Business Bookkeeping App in Nigeria',
    description: 'Free business bookkeeping app in Nigeria. Record sales & expenses, manage stock, generate receipts & invoices. Perfect for Nigerian businesses.',
    type: 'website',
    url: 'https://tali.ng',
    siteName: 'Tali Business Management',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tali - Free Business Bookkeeping App in Nigeria',
    description: 'Free business bookkeeping app in Nigeria. Record sales & expenses, manage stock, generate receipts & invoices. Perfect for Nigerian businesses.',
  },
  alternates: {
    canonical: 'https://tali.ng'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}