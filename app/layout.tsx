import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLEACH Core',
  description: 'Guarda i capitoli più importanti di BLEACH, selezionati per l\'esperienza di visione più completa, senza filler o interruzioni di alcun tipo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-netflix-black text-white`}>
        {children}
      </body>
    </html>
  )
} 