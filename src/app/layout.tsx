import type { Metadata } from "next";
import Header from "@/components/layout/Header/Header";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "로뎀숲 심리연구소 | 전문 심리상담 및 치료",
  description:
    "마음의 평안과 성장을 위한 전문 심리상담센터. 개인상담, 부부상담, 가족상담 등 다양한 심리치료 프로그램을 제공합니다.",
  keywords: "심리상담, 심리치료, 상담센터, 로뎀숲, 개인상담, 부부상담, 가족상담, 심리검사",
  openGraph: {
    title: "로뎀숲 심리연구소 | 전문 심리상담 및 치료",
    description: "마음의 평안과 성장을 위한 전문 심리연구소",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "로뎀숲 심리연구소",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

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
        <meta name="naver-site-verification" content="네이버 사이트 인증 코드" />
        <link rel="canonical" href="https://rothemforest.com" />
      </head>
      <body style={{ fontFamily: "Pretendard, sans-serif" }}>
        <Header />

        {children}
      </body>
    </html>
  );
}
