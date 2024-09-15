import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/reset.css";
import "./css/main.css";
import "./css/media.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Preloader from "./components/Preloader";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roman Zhurakovskiy portfolio",
  description: "Roman Zhurakovskiy by create next app",
  openGraph: {
    title: "Roman Zhurakovskiy portfolio",
    description: "Roman Zhurakovskiy by create next app",
    url: "https://romanzhurakovskiy.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Roman Zhurakovskiy",
            "url": "https://romanzhurakovskiy.vercel.app/",
          }`}
        </script>
      </Head>
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>
        <Preloader />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
