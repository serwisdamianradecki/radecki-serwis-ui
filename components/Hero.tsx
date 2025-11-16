import React from 'react';
import Image from 'next/image';
import Section from './Section';
import Button from './Button';
import FadeInSection from './FadeInSection';
import { heroContent } from '@/content/hero.text';

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+48 123 456 789';
  
  return (
    <Section id="start" paddingY="lg" className="pt-24 md:pt-32 bg-gradient-to-b from-background-main to-background-alt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <FadeInSection className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6 leading-tight">
            {heroContent.heading}
          </h1>
          <p className="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed">
            {heroContent.subheading}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href="#kontakt" size="lg">
              {heroContent.ctaPrimary}
            </Button>
            <Button href={`tel:${phone}`} variant="outline" size="lg">
              {heroContent.ctaSecondary}
            </Button>
          </div>
          
          {/* Phone CTA */}
          <div className="flex items-center gap-3 text-text-muted">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">
              {heroContent.ctaMicro}{' '}
              <a href={`tel:${phone}`} className="text-primary font-semibold hover:underline">
                {phone}
              </a>
            </span>
          </div>
        </FadeInSection>
        
        {/* Image */}
        <FadeInSection delay={250} className="order-1 lg:order-2">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <Image
              src="/img/hero-image.jpg"
              alt="Serwis komputerów i laptopów"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeInSection>
      </div>
    </Section>
  );
}
