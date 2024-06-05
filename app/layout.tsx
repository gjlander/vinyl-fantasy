import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Footer, Navbar } from '@/lib/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Vinyl Fantasy',
    description: 'Fake ecommerce vinyl store built in Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                <main className='min-h-screen '>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
