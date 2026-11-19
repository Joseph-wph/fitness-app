import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { fontVariables } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import './globals.css';

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={fontVariables}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
