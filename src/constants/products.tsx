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
    stack: ["Next.js", "Tailwindcss", "API", "SSR", "framer-motion", "next-intl", "Docker"],
    slug: "custommerce-home-page",
    content: (
      <div>
        <p>
          Czas pracy nad całym systemem trwał od maja i planowane zakończenie to koniec października.
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
    stack: ["React-Native", "Next.js", "Tailwindcss", "API", "SSR", "framer-motion", "Mobile", "Web", "Android", "Docker"],
    slug: "card-comments-app",
    content: (
      <div>
        <p>
          Czas pracy nad całym systemem trwa od ponad 1.5 roku. Zadaniem systemu jest nadzorowanie prac zespołu i zleceniodawcy nad projektem i automatyczne informowanie o statusach. Główny moduł systemu obejmuje możliwość nanoszenia komentarzy, akceptowania lub odrzucania projektu, wersjonowanie produktu i nadzorowanie statusu zlecenia.
        </p>
        <p>
          Front został napisany w <Highlight>Next.js</Highlight> natomiast backend w <Highlight>Node.js</Highlight> całość została spięta ze sobą za pomocą <Highlight>REST API</Highlight>
        </p>
        <p>
          System posiada również inne moduły jak:
        </p>
        <ul>
          <li>real time reload - zmiany live podczas pracy wielu osób nad jednym produktem </li>
          <li>integracja live i synchronizacja z główną bazą większego systemu</li>
          <li>system uprawnień użytkowników</li>
          <li>system logów</li>
          <li>zadania cron czuwające nad deadlinem</li>
          <li>ciemny i jasny motyw działający w zależności od preferencji systemu operacyjnego</li>
          <li>system posiada również inne moduły jak: system mailowy, system kontroli powdrożeniowej, dziedziczenie komentarzy (feedbacku), możliwość sterowania elementami interaktywnymi produktu</li>
        </ul>
        <p>
          Strona serwowana jest przy użyciu CI/CD.
        </p>
        <Image src={ccs2} alt="Card Comment App product dashboard"/>
        <Image src={ccs3} alt="Card Comment App logs view"/>
        <Image src={ccs4} alt="Card Comment App product view"/>
      </div>
    ),
  },
  {
    title: "RCS-MobileApp - aplikacja mobilna do systemu RCS",
    description:
      "Zaprojektowanie i stworzenie aplikacji mobilnej do monitorowania wdrożenia kart produktowych rich-content.",
    thumbnail: ccs1,
    stack: ["React-Native", "React", "API", "Android", "Expo", "Push notifications", "charts"],
    slug: "remongton-one-lp",
    content: (
      <div>
        <p>
        Moim zadania było stworzenie i napisanie aplikacji mobilnej przy użyciu React-Native i Expo, która na bieżąco aktualizowała statusy wdrożenia kart produktowych na platformy e-commerce i ich aktualny etap projektowania.
        </p>
        <p>Aplikacja posiadała takie funkcję jak:</p>
        <ul>
          <li>system logowania</li>
          <li>automatyczny wybór dashboardu w zależności od uprawnień admin/klient/dystrybutor </li>
          <li>interaktywne wykresy ze statystykami</li>
          <li>powiadomienia push informujące o wdrożeniu</li>
          <li>zarządznie kontem</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Remington One - Landing Page",
    href: "https://www.remingtonone.pl",
    description:
      "Implementacja wyglądu i działania strony internetowej na potrzeby kampanii marketingowej dla nowych produktów z serii Remington ONE.",
    thumbnail: ccs1,
    stack: ["HTML", "SCSS", "JavaScript", "API", "CI/CD"],
    slug: "remongton-one-lp",
    content: (
      <div>
        <p>
        Moim zadania było dokładne odwzorowanie projektu graficznego, który został stworzony zgodnie z key visual marki Remington. Podczas tworzenia landing page'a Remington One dbałem o to, żeby strona była zgodna z dobrymi zasadami programowania oraz jednocześnie przyjazna dla użytkowników. W trakcie kampanii otrzymałem zlecenie na ASAP na dodadnie formularza mailego, który miał zostać spięty razem z zaszyfrowaną bazą danych osobowych (RODO) z możliwością przeglądania zgłoszeń przez użytkowników z odpowiednimi uprawnieniami - udało się temat zamknąć 2 dni przed deadlinem.

        Moim zadaniem było również dodanie niezbędnych narzędzi analitycznych, takich jak: Google Tag Manager, Cookie boota, Captcha, Meta Pixel.
        </p>
      </div>
    ),
  },
  {
    title: "Dynamiczny formularz do wyceniania projektów",
    href: "https://bezplatna-wycena-rich-content.custommerce.pl/",
    description:
      "Zaprojektowanie i implementacja algorytmu obliczającego cene na podstawie wielu czynników podanych przez klienta.",
    thumbnail: ccs1,
    stack: ["Next.js", "React.js", "TailwindCSS", "API", "nodemailer", "Docker", "CI/CD"],
    slug: "formularz-rich-content",
    content: (
      <div>
        <p>
        Moim zadania było stworzenie strony zawierającej formularz dla klienta, po którego wypełnieniu otrzymywał wycenę projektu.
        Algorytm miał za zadanie analizować wiele krytycznych danych dot. wyceny i perfekcyjnie dobierać cenę jednostkową do zmieniających się innych warunków projektu wybranych przez klienta. Wypełnione formularze były zapisywane w bazie i na ich podstawię była generowana umowa przez inny system.

        Wszystko zostało spięte z prostym CMSem do sprawdzania wypełnionych formularzy i zapamiętywania ich.
        </p>
      </div>
    ),
  },
  {
    title: "TeamWork Harmonogram",
    description:
      "Zaprojektowanie i implementacja systemu zczytującego projekty z aplikacji TeamWork.",
    thumbnail: ccs1,
    stack: ["React.js", "TeamWork", "API", "AdobeXD"],
    slug: "harmonogram-teamwork",
    content: (
      <div>
        <p>
        Moim zadania było stworzenie aplikacji, która zczytuje aktywne projekty z aplikacji TeamWork i prezentuje je w wizualnie atrakcyjny sposób na timeline'ach czasowych. System ma możliwość:
        <ul>
          <li>dodania kamieni milowych (milestones)</li>
          <li>akceptacji wykonania projektu/milestone</li>
          <li>dwustronnej synchronizacji terminów projektowych z TeamWork</li>
          <li>przypisania danego etapu projektu dla konkretnego pracownika</li>
          <li>przeglądanie historii projektowej</li>
        </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Generator hotspotów, sliderów i tabel interaktywnych",
    description:
      "Zaprojektowanie i implementacja systemu do szybkiego tworzenia komponentów przez drag-and-drop.",
    thumbnail: ccs1,
    stack: ["React.js", "TailwindCSS"],
    slug: "harmonogram-teamwork",
    content: (
      <div>
        <p>
        Moim zadania było stworzenie aplikacji, która w prosty sposób (drag-and-drop) pozwala na tworzenie komponentów dla kart rich-content, które programista może w prosty sposób wyeksportować w postaci czystego kodu HTML i CSS.
        </p>
      </div>
    ),
  }
];
