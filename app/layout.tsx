import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Purezal | Transform Your Fitness. Naturally.',
  description: 'Purezal delivers personalized wellness solutions for a healthier, happier life.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
