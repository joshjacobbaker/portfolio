import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Joshua Baker - Full Stack Developer',
    template: '%s | Joshua Baker - Full Stack Developer',
  },
  description:
    'Full Stack Developer specializing in modern web technologies. Building scalable applications with React, Next.js, and Node.js.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
  ],
  authors: [{ name: 'Joshua Baker' }],
  creator: 'Joshua Baker',
  metadataBase: new URL('https://joshuabaker.dev'), // Replace with your domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joshuabaker.dev',
    title: 'Joshua Baker - Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web technologies.',
    siteName: 'Joshua Baker Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua Baker - Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web technologies.',
    creator: '@yourusername', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
