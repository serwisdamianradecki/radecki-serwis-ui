import React from "react";
import Section from "./Section";
import Button from "./Button";
import FadeInSection from "./FadeInSection";
import AnimatedCard from "./AnimatedCard";
import { pricingContent } from "@/content/pricing.text";

export default function PricingTable() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+48 123 456 789";

  return (
    <Section id="cennik" backgroundColor="main" className="rounded-lg">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-4 text-center">
            {pricingContent.heading}
          </h2>

          <p className="text-text-muted mb-12 text-center max-w-3xl mx-auto bg-accent/10 border border-accent/30 rounded-lg p-4">
            {pricingContent.note}
          </p>
        </FadeInSection>

        {/* Pricing Categories */}
        <div className="space-y-8 mb-8 rounded-lg">
          {pricingContent.categories.map((category, categoryIndex) => (
            <AnimatedCard key={categoryIndex} delay={categoryIndex * 180}>
              <div className="bg-white rounded-lg shadow-md border border-border-soft overflow-hidden ">
                <div className="bg-primary/8 px-6 py-4 border-b border-border-soft">
                  <h3 className="text-xl font-bold text-text-main">
                    {category.name}
                  </h3>
                </div>

                <div className="divide-y divide-border-soft rounded-lg">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-6 py-4 flex flex-col sm:flex-row sm:items-center rounded-lg sm:justify-between gap-2 hover:bg-background-alt/70 transition-all duration-250"
                    >
                      <div className="flex-1 rounded-lg">
                        <span className="text-text-main font-medium">
                          {item.service}
                        </span>
                        {"note" in item && item.note && (
                          <p className="text-sm text-text-muted mt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <div className="text-primary font-bold whitespace-nowrap text-lg">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Legal Footnote */}
        <p className="text-xs text-text-muted text-center mb-8 italic">
          {pricingContent.legalFootnote}
        </p>

        {/* CTA */}
        <FadeInSection delay={600}>
          <div className="text-center">
            <Button href="#kontakt" size="lg">
              {pricingContent.ctaButton}
            </Button>

            <p className="mt-6 text-sm text-text-muted">
              {pricingContent.ctaMicro}{" "}
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
