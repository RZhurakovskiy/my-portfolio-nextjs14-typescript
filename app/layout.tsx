import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/reset.css";
import "./css/main.css";
import "./css/media.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

import Preloader from "./components/Preloader";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>
        <Preloader />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
