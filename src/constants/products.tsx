import custommerceThumbnail from "public/images/custommerce-thumbnail.png";

export const products = [
  {
    href: "https://www.custommerce.pl",
    title: "Custommerce",
    description:
      "Zaprojektowanie i zaimplementowanie strony głównej z ponad 40 podstronami. Wszystko połączone jest do autorskiego CMSa przy użyciu API. Strona posiada również system szybkiego budowania nowych podstron. Strona dostosowana jest do obsługi wielu języków.",
    thumbnail: custommerceThumbnail,
    stack: ["Nextjs", "Tailwindcss", "API", "SSR", "framer-motion", "next-intl"],
    slug: "custommerce-home-page",
    content: (
      <div>
        <p>
          Czas pracy nad całym system strony trwa od maja i planowane zakończenie to koniec października.
        </p>
        <p>
          Strona posiada takie moduły jak:
        </p>
        <ul>
          <li>system metamorfoz</li>
          <li>system case-study z dynamicznie zmieniającymi się statystykami live</li>
          <li>system portfolio zintegrowany z zewnętrznym systemem RCS, który aktualizuje informację o wdrożeniu</li>
          <li>system blogowy</li>
        </ul>
        <p>
          Strona serwowana jest przy użyciu CI/CD razem z aktywnym cachowaniem.
        </p>
      </div>
    ),
  }
];
