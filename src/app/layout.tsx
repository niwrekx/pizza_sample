import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Notifications from '@/components/Notifications'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'My sample food delivery app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Notifications />
        <Navbar />
        {children}        
        <Footer />
      </body>
    </html>
  )
}
