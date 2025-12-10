import React from "react";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+48 123 456 789";
  const email = process.env.NEXT_PUBLIC_EMAIL || "kontakt@serwis-it.pl";
  const city = process.env.NEXT_PUBLIC_CITY || "Żory, Rybnik, Pawłowice";

  return (
    <footer className="bg-accent-dark text-button-text">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serwis IT</h3>
            <p className="text-button-text/85 text-sm leading-relaxed">
              Profesjonalny serwis komputerów i laptopów w {city} i okolicach.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-button-text/85">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-button-text transition-colors duration-200"
                >
                  📞 {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-button-text transition-colors duration-200"
                >
                  ✉️ {email}
                </a>
              </li>
              <li>{city}</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Obszar działania</h3>
            <p className="text-button-text/85 text-sm">
              Serwis mobilny z dojazdem na terenie:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-button-text/85">
              <li>• Żory</li>
              <li>• Rybnik</li>
              <li>• Pawłowice</li>
              <li>• Okolice</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-button-text/25 text-center text-sm text-button-text/85">
          <p>
            © {new Date().getFullYear()} Serwis IT. Wszystkie prawa zastrzeżone.
          </p>
          <p className="mt-2 text-xs">
            Usługi wykonuję w ramach działalności nierejestrowanej zgodnie z
            art. 5 ustawy Prawo przedsiębiorców.
          </p>
        </div>
      </div>
    </footer>
  );
}
