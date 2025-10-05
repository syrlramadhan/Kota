// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Kota Cloud - Smart Network Solutions',
  description: 'Platform jaringan dan komputasi awan yang komprehensif',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}