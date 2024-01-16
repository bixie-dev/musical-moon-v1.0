import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { appTitle } from '@/@core/constants/app'
import { poppins } from '@/@core/utils/fonts'
import AppContextProvider from '@/@core/contexts/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: appTitle,
  description: 'Music, beats, sounds kits ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
