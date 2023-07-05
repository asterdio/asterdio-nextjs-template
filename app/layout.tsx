import { Figtree } from 'next/font/google';
import '../styles/index.scss';
import React from 'react';
import CButton from '@/components/ui/form/button.component';

const figtree = Figtree({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family',
});

export const metadata = {
  title: 'Mero Moto',
  description: 'Vechile',
  keywords: 'scooties, brands',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className} suppressHydrationWarning={true}>
        {children}

        <CButton name="Button" />
      </body>
    </html>
  );
}
