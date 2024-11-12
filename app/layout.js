import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';


const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Faisa | Full-Stack Software Engineer | Web & Mobile Solutions',
  description:
    'Faisa is a full-stack software engineer specializing in web and mobile application development, offering tailored solutions for businesses with a focus on performance, scalability, and mobile responsiveness.',
  keywords:
    'Faisa, software engineer, full-stack developer, web development, mobile app development, React, Flutter, Tailwind CSS, JavaScript, SEO, cloud computing, custom solutions',
  openGraph: {
    type: 'website',
    url: 'https://faisa-dev.com/',
    title: 'Faisa | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: 'http://faisa-dev.com/assets/og-image.png',
        height: 630,
        alt: 'Faisa - Full-Stack Software Engineer',
      },
    ],
  },
  LinkedIn: {
    title: 'Faisa | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: 'http://faisa-dev.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Faisa - Full-Stack Software Engineer',
      },
    ],
  },
  Facebook: {
    title: 'Faisa | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: 'http://faisa-dev.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Faisa - Full-Stack Software Engineer',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RNGZK6KHHQ"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RNGZK6KHHQ');`}
        </Script>
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
