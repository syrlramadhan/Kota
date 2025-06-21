import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'animate.css';
export const metadata = {
  title: 'Kota Cloud',
  description: 'Powering business with IoT-web solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}