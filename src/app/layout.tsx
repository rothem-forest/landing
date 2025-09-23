import Header from '@/components/layout/Header/Header';
import './globals.css';
import Script from 'next/script';
import { sitemeta } from '@/shared/config';

export const metadata = sitemeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body style={{ fontFamily: 'Pretendard, sans-serif' }}>
        <Header />

        {children}
      </body>
    </html>
  );
}
