import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'ainexo - 28-dnevni AI izziv',
  description: 'Obvladajte AI v 28 dneh z osebnim načrtom učenja',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
