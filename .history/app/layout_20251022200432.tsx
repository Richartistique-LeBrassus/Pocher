import type { Metadata } from 'next';
import '../globals.css';
import { draftMode } from 'next/headers';
import AppLayout from '@/components/AppLayout';
import DelayedPage from '@/components/ui/DelayedPage'; // <-- use this
import Head from 'next/head';
import { ThemeProviders } from '@/components/ui/ThemeProvider';

export const metadata: Metadata = {
  title: 'Écurie Richartistique | Official Online Store',
  description: 'Luxury Scale Model E-commerce Store by MJ Ríchards',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode();

  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/PlayfairDisplay-VariableFont_wght.ttf" as="font" type="font/ttf" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf" as="font" type="font/ttf" />
        <link rel="preload" href="/fonts/Oswald-Medium.ttf" as="font" type="font/ttf" />
        <link rel="preload" href="/fonts/Birthstone-Regular.woff2" as="font" type="font/woff2" />
      </Head>
        <html lang="en" suppressHydrationWarning>
          <body className="bg-neutral-50 antialiased overflow-x-hidden">
            <ThemeProviders>
              <DelayedPage>
                <AppLayout>{children}</AppLayout>
              </DelayedPage>
            </ThemeProviders>
          </body>
        </html>
    </>
  );
}