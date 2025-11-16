import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PricingTable from '@/components/PricingTable';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';
import { generateMetadata } from '@/lib/seo';
import { generateLocalBusinessSchema } from '@/lib/schema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://serwis-it.pl';
const PHONE = process.env.NEXT_PUBLIC_PHONE || '+48 123 456 789';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'kontakt@serwis-it.pl';
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || '';
const CITY = process.env.NEXT_PUBLIC_CITY || 'Żory';

export const metadata: Metadata = generateMetadata({
  title: 'Serwis Komputerów i Laptopów Żory, Rybnik, Pawłowice | Naprawa, Diagnostyka, Odzyskiwanie Danych',
  description: 'Profesjonalny serwis laptopów Żory, naprawa komputerów Rybnik, odzyskiwanie danych Pawłowice. Czyszczenie, wymiana podzespołów, reinstalacja Windows, usuwanie wirusów. Dojazd do klienta. Szybko i rzetelnie.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/img/hero-image.jpg`,
});

export default function HomePage() {
  const schema = generateLocalBusinessSchema(PHONE, EMAIL, ADDRESS, CITY, SITE_URL);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Layout */}
      <Header />
      <main>
        <Hero />
        <Services />
        <PricingTable />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingPhoneButton />
    </>
  );
}
