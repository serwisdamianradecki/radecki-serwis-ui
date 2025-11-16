import React from 'react';
import Image from 'next/image';
import Section from './Section';
import Button from './Button';
import FadeInSection from './FadeInSection';
import { aboutContent } from '@/content/about.text';

export default function About() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+48 123 456 789';
  
  return (
    <Section id="o-mnie" backgroundColor="white">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-12 text-center">
            {aboutContent.heading}
          </h2>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <FadeInSection delay={100} className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-primary/10 hover-lift">
              <Image
                src="/img/profile-image.jpg"
                alt="Serwis IT - profil"
                fill
                className="object-cover"
              />
            </div>
          </FadeInSection>
          
          {/* Description */}
          <FadeInSection delay={200} className="md:col-span-2">
            <p className="text-text-muted leading-relaxed mb-8 text-lg">
              {aboutContent.description}
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${phone}`} size="lg">
                {aboutContent.ctaButton}
              </Button>
            </div>
          </FadeInSection>
        </div>
        
        {/* Micro CTA */}
        <FadeInSection delay={400}>
          <p className="mt-12 text-sm text-text-muted text-center">
            {aboutContent.ctaMicro}{' '}
            <a href={`tel:${phone}`} className="text-primary font-semibold hover:underline">
              {phone}
            </a>
          </p>
        </FadeInSection>
      </div>
    </Section>
  );
}
