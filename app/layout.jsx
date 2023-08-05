import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { orbitron } from './fonts';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='flex flex-col px-4 py-2 min-h-screen bg-orange-50'>
                <header>
                    <NavBar />
                </header>
                <main className='py-3 flex-grow'>
                    {children}
                </main>
                <footer className='text-center text-xs border-t py-3'>
                    Game data and images courtsey of <a href="https://rawg.io" target='_blank' className="text-orange-800 hover:underline">RAWG</a>
                </footer>
            </body>
        </html>
    );
}


