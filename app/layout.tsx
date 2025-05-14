import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tali - Simplify Your Bookkeeping',
    template: '%s | Tali'
  },
  description: 'Streamline income, expenses & reporting in one app. Track finances, generate reports, and access your data from anywhere.',
  keywords: 'bookkeeping, finance, accounting, small business, SaaS, financial reporting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}