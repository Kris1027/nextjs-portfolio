import type { Metadata } from 'next';
import './globals.css';
import { Dosis } from 'next/font/google';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer';
import { DarkModeProvider } from './providers/dark-mode-provider';

const open_sans = Dosis({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kris Portfolio',
    description: 'Frontend developer portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={open_sans.className}>
                <DarkModeProvider>
                    <Navigation />
                    <div className='max-w-[1280px] mx-auto'>{children}</div>
                    <Footer />
                </DarkModeProvider>
            </body>
        </html>
    );
}
