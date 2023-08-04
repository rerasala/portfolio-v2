import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './navbar/navbar';
import Projects from './projects/projects';
import NewTimeline from './about/NewTimeline';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohans portfolio',
  description: 'Rohan Erasalas Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <body className={inter.className}>{children}</body>
    </>
  )
}
