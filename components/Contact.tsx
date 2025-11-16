import React from 'react';
import Section from './Section';
import Button from './Button';
import FadeInSection from './FadeInSection';
import AnimatedCard from './AnimatedCard';
import { contactContent } from '@/content/contact.text';

export default function Contact() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+48 123 456 789';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'kontakt@serwis-it.pl';
  const address = process.env.NEXT_PUBLIC_ADDRESS || '';
  const city = process.env.NEXT_PUBLIC_CITY || 'Żory, Rybnik, Pawłowice';
  const googleMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || '#';
  
  return (
    <Section id="kontakt" backgroundColor="main">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6 text-center">
            {contactContent.heading}
          </h2>
          
          <p className="text-lg text-text-muted mb-12 text-center">
            {contactContent.description}
          </p>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <AnimatedCard delay={120}>
              <a
                href={`tel:${phone}`}
                className="block bg-white rounded-xl p-6 border border-border-soft hover:border-primary hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1 font-medium">{contactContent.phoneLabel}</div>
                    <div className="text-lg font-bold text-primary">{phone}</div>
                  </div>
                </div>
              </a>
            </AnimatedCard>
            
            {/* Email */}
            <AnimatedCard delay={240}>
              <a
                href={`mailto:${email}`}
                className="block bg-white rounded-xl p-6 border border-border-soft hover:border-primary hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1 font-medium">{contactContent.emailLabel}</div>
                    <div className="text-lg font-bold text-primary break-all">{email}</div>
                  </div>
                </div>
              </a>
            </AnimatedCard>
            
            {/* Address */}
            <AnimatedCard delay={360}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-6 border border-border-soft hover:border-primary hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1 font-medium">{contactContent.addressLabel}</div>
                    <div className="text-lg font-bold text-text-main">
                      {address || city}
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedCard>
          </div>
          
          {/* Quick CTA */}
          <FadeInSection delay={250}>
            <div className="bg-primary/10 rounded-xl p-8 border border-primary/30 flex flex-col justify-center card-hover shadow-md">
              <h3 className="text-2xl font-bold text-text-main mb-4">
                Gotowy na naprawę?
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Umów się na serwis lub zapytaj o wycenę. Odpowiem szybko!
              </p>
              
              <div className="space-y-3">
                <Button href={`tel:${phone}`} className="w-full" size="lg">
                  {contactContent.phoneCta}
                </Button>
                <Button href={`mailto:${email}`} variant="outline" className="w-full" size="lg">
                  {contactContent.emailCta}
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
        
        {/* Micro CTA */}
        <FadeInSection delay={500}>
          <p className="mt-12 text-sm text-text-muted text-center">
            {contactContent.ctaMicro}{' '}
            <a href={`tel:${phone}`} className="text-primary font-semibold hover:underline">
              {phone}
            </a>
          </p>
        </FadeInSection>
      </div>
    </Section>
  );
}
