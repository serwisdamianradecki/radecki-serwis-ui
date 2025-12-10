"use client";

import React from "react";

export default function FloatingPhoneButton() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+48 123 456 789";

  return (
    <a
      href={`tel:${phone}`}
      className="fixed bottom-6 right-6 z-40 bg-primary text-button-text p-4 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-200 hover:scale-110 md:hidden animate-pulse-subtle"
      aria-label="Zadzwoń teraz"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  );
}
