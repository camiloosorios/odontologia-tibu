import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Odontología en Tibú - Consultorio Dental',
  description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
  robots: 'index, follow',
  openGraph: {
    title: 'Odontología en Tibú - Consultorio Dental',
    description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
        width: 1200,
        height: 630,
      }
    ],
    url: 'https://odontologia-tibu.vercel.app',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Odontología en Tibú',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odontología en Tibú - Consultorio Dental',
    description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
        width: 1200,
        height: 630,
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <link rel="canonical" href="https://odontologia-tibu.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <ToastContainer
          pauseOnHover={false}
        />
      </body>
    </html>
  );
}
