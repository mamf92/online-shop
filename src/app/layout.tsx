import type { Metadata } from 'next';
import { Aboreto, Alegreya_Sans_SC, Zen_Kurenaido, Inter } from 'next/font/google';
import './globals.css';

const aboreto = Aboreto({
  variable: '--font-aboreto',
  subsets: ['latin'],
  weight: '400',
});

const alegreyaSansSC = Alegreya_Sans_SC({
  variable: '--font-alegreya-sans-sc',
  subsets: ['latin'],
  weight: '400',
});

const zenKurenaido = Zen_Kurenaido({
  subsets: ['latin'],
  variable: '--font-zen-kurenaido',
  weight: '400',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '300',
});

export const metadata: Metadata = {
  title: 'Skretcher Web Shop',
  description: 'A fictive online shop built with Next.js and Tailwind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${alegreyaSansSC.variable} ${zenKurenaido.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
