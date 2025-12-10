import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: "white" | "main" | "alt";
  paddingY?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  id,
  className = "",
  backgroundColor = "main",
  paddingY = "lg",
}: SectionProps) {
  const bgColors = {
    white: "bg-white",
    main: "bg-background-main",
    alt: "bg-background-alt",
  };

  const paddings = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-24",
  };

  return (
    <section
      id={id}
      className={`${bgColors[backgroundColor]} ${paddings[paddingY]} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}
