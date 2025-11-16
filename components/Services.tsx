import React from "react";
import Section from "./Section";
import Button from "./Button";
import FadeInSection from "./FadeInSection";
import AnimatedCard from "./AnimatedCard";
import { servicesContent } from "@/content/services.text";

export default function Services() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+48 123 456 789";

  return (
    <Section id="uslugi" backgroundColor="white">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6 text-center">
            {servicesContent.heading}
          </h2>

          <div className="mb-8 text-center whitespace-pre-line text-text-muted">
            {servicesContent.description}
          </div>
        </FadeInSection>

        {/* Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {servicesContent.serviceList.map((service, index) => (
            <AnimatedCard key={index} delay={index * 60} className="rounded-xl">
              <div className="flex items-start gap-3 p-4  rounded-lg border  hover:bg-white transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-text-main font-medium">{service}</span>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={600}>
          <div className="text-center">
            <Button href="#kontakt" size="lg">
              {servicesContent.ctaButton}
            </Button>

            <p className="mt-6 text-sm text-text-muted">
              {servicesContent.ctaMicro}{" "}
              <a
                href={`tel:${phone}`}
                className="text-primary font-semibold hover:underline"
              >
                {phone}
              </a>
            </p>
          </div>
        </FadeInSection>
      </div>
    </Section>
  );
}
