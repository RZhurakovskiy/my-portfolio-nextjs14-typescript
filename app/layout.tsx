"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Preloader from './components/Preloader';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Чистим события при размонтировании
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body suppressHydrationWarning={true}>
        {isLoading && <Preloader />} {/* Отображение Preloader во время загрузки */}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
