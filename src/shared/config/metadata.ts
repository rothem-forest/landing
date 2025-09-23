import type { Metadata } from 'next';

export const sitemeta: Metadata = {
  title: {
    default: '로뎀숲 심리상담 연구소 | 전문 심리상담 및 치료',
    template: '%s | 로뎀숲 심리상담 연구소',
  },
  description:
    '마음의 평안과 성장을 위한 전문 심리상담센터. 개인상담, 부부상담, 가족상담 등 다양한 심리치료 프로그램을 제공합니다.',
  keywords: '심리상담, 심리치료, 상담센터, 로뎀숲, 개인상담, 부부상담, 가족상담, 심리검사',
  authors: [{ name: '로뎀숲 심리상담 연구소' }],
  creator: '로뎀숲 심리상담 연구소',
  publisher: '로뎀숲 심리상담 연구소',
  metadataBase: new URL('https://rothemforest.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://rothemforest.com',
    siteName: '로뎀숲 심리상담 연구소',
    title: '로뎀숲 심리상담 연구소 | 전문 심리상담 및 치료',
    description: '마음의 평안과 성장을 위한 전문 심리연구소',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '로뎀숲 심리상담 연구소',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '로뎀숲 심리상담 연구소 | 전문 심리상담 및 치료',
    description: '마음의 평안과 성장을 위한 전문 심리상담 연구소',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '구글 서치 콘솔 인증 코드',
    other: {
      'naver-site-verification': '네이버 사이트 인증 코드',
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};
