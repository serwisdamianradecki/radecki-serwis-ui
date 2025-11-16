import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url,
      siteName: 'Serwis IT',
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ] : [],
      locale: 'pl_PL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
    alternates: {
      canonical: config.url,
    },
  };
}
