import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gymmer: Fitness Tracking App',
  description: 'Gymmer is built with a robust clean architecture foundation, delivering secure and seamless access through Firebase-powered authentication, login/signup flows, and complete user profile management. The app features a dynamic fitness calendar that helps users track streaks and stay consistent, alongside a comprehensive suite of fitness tools designed to support daily workout routines. Gymmer also includes an AI-powered chatbot that provides fast, interactive, and context-aware fitness assistance to guide users anytime they need it.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/gymmer_logo_green_background.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/gymmer_logo_green_background.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      // {
      //   url: '/icon.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    // apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6302980261249364"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
