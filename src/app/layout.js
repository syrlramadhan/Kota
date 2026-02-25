// src/app/layout.js
'use client';

import './globals.css';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Kota Cloud - Smart Network Solutions</title>
        <meta name="description" content="Platform jaringan dan komputasi awan yang komprehensif" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}