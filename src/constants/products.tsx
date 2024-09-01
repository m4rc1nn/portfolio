import Image from "next/image";
import custommerce1 from "../../public/custommerce/1.png";

import ccs1 from "../../public/card-comment-app/1.png";
import ccs2 from "../../public/card-comment-app/2.png";
import ccs3 from "../../public/card-comment-app/3.png";
import ccs4 from "../../public/card-comment-app/4.png";

import { Highlight } from "@/components/Highlight";

export const products = [
  {
    href: "https://www.custommerce.pl",
    title: "Custommerce",
    description:
      "Zaprojektowanie i zaimplementowanie strony głównej z ponad 40 podstronami. Wszystko połączone jest do autorskiego CMSa przy użyciu API. Strona posiada również system szybkiego budowania nowych podstron. Strona dostosowana jest do obsługi wielu języków.",
    thumbnail: custommerce1,
    stack: ["Nextjs", "Tailwindcss", "API", "SSR", "framer-motion", "next-intl", "Docker"],
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
  },
  {
    title: "CardCommentsApp",
    description:
      "Zaprojektowanie i zaimplementowanie systemu do obsługi kart produktowych na platformach e-commerce takich jak Rossmann, Media Expert, Allegro, Media Markt i wielu innych.",
    thumbnail: ccs1,
    stack: ["React-Native", "Nextjs", "Tailwindcss", "API", "SSR", "framer-motion", "Mobile", "Web", "Android", "Docker"],
    slug: "card-comments-app",
    content: (
      <div>
        <p>
          Czas pracy nad całym system trwał ponad 1.5 roku (projekt cały czas jest rozwijany). Zadaniem systemu jest nadzorowanie prac zespołu i zleceniodawcy nad projektem i automatyczne informowanie o statusach. Główny moduł systemu obejmuje możliwość nanoszenia komentarzy, akceptowania lub odrzucania projektu, wersjonowanie produktu i nadzorowanie statusu zlecenia.
        </p>
        <p>
          Front został napisany w <Highlight>Next.js</Highlight> natomiast backend w <Highlight>Node.js</Highlight> całość została spięta ze sobą za pomocą <Highlight>REST API</Highlight>
        </p>
        <p>
          System posiada również inne moduły jak:
        </p>
        <ul>
          <li>hot live reload - zmiany live podczas pracy wielu osób nad jednym produktem</li>
          <li>integracja live i synchronizacja z główną bazą większego systemu</li>
          <li>system uprawnień użytkowników</li>
          <li>system logów</li>
          <li>zadania cron czuwające nad deadlinem</li>
          <li>ciemny i jasny motyw działający w zależności od preferencji systemu operacyjnego</li>
        </ul>
        <p>
          Strona serwowana jest przy użyciu CI/CD.
        </p>
        <Image src={ccs2} alt="Card Comment App product dashboard"/>
        <Image src={ccs3} alt="Card Comment App logs view"/>
        <Image src={ccs4} alt="Card Comment App product view"/>
      </div>
    ),
  }
];
