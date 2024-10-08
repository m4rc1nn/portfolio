import Image from "next/image";
import custommerce1 from "../../public/custommerce/1.png";

import ccs1 from "../../public/card-comment-app/1.png";
import ccs2 from "../../public/card-comment-app/2.png";
import ccs3 from "../../public/card-comment-app/3.png";
import ccs4 from "../../public/card-comment-app/4.png";
import ccs5 from "../../public/card-comment-app/5.png";
import ccs6 from "../../public/card-comment-app/6.png";
import ccs7 from "../../public/card-comment-app/7.png";
import ccs8 from "../../public/card-comment-app/8.png";
import ccs9 from "../../public/card-comment-app/9.png";
import ccs10 from "../../public/card-comment-app/10.png";

import stealer1 from "../../public/stealer/1.png"
import stealer2 from "../../public/stealer/2.png"
import stealer3 from "../../public/stealer/3.png"
import stealer4 from "../../public/stealer/4.png"

import rma1 from "../../public/rcs-mobile-app/1.png"

import remington1 from "../../public/remingtonone/1.png";
import remington2 from "../../public/remingtonone/2.png";
import remington3 from "../../public/remingtonone/3.png";

import frc1 from "../../public/form-rich-content/1.png"
import frc2 from "../../public/form-rich-content/2.png"
import frc3 from "../../public/form-rich-content/3.png"

import harmonogram1 from "../../public/harmonogram-teamwork/1.png"

import generator1 from "../../public/generator/1.png"
import generator2 from "../../public/generator/2.png"
import generator3 from "../../public/generator/3.png"

import { Highlight } from "@/components/Highlight";
import Link from "next/link";

export const products = [
    {
        title: "CardCommentsApp",
        description:
            "Zaprojektowanie i zaimplementowanie systemu do obsługi kart produktowych na platformach e-commerce takich jak Rossmann, Media Expert, Allegro, Media Markt i wielu innych.",
        thumbnail: ccs1,
        stack: [
            "React-Native",
            "Next.js",
            "Tailwindcss",
            "API",
            "SSR",
            "framer-motion",
            "Mobile",
            "Web",
            "Android",
            "Docker",
        ],
        slug: "card-comments-app",
        content: (
            <div>
                <p>
                    Czas pracy nad całym systemem trwa od ponad 1.5 roku. Zadaniem systemu jest nadzorowanie prac
                    zespołu i zleceniodawcy nad projektem i automatyczne informowanie o statusach. Główny moduł systemu
                    obejmuje możliwość nanoszenia komentarzy, akceptowania lub odrzucania projektu, wersjonowanie
                    produktu i nadzorowanie statusu zlecenia.
                </p>
                <p>
                    Front został napisany w <Highlight>Next.js</Highlight> natomiast backend w{" "}
                    <Highlight>Node.js</Highlight> całość została spięta ze sobą za pomocą{" "}
                    <Highlight>REST API</Highlight>
                </p>
                <p>System posiada również inne moduły jak:</p>
                <ul>
                    <li>real time reload - zmiany live podczas pracy wielu osób nad jednym produktem </li>
                    <li>integracja live i synchronizacja z główną bazą większego systemu</li>
                    <li>system uprawnień użytkowników</li>
                    <li>system logów</li>
                    <li>zadania cron czuwające nad deadlinem</li>
                    <li>ciemny i jasny motyw działający w zależności od preferencji systemu operacyjnego</li>
                    <li>
                        system posiada również inne moduły jak: system mailowy, system kontroli powdrożeniowej,
                        dziedziczenie komentarzy (feedbacku), możliwość sterowania elementami interaktywnymi produktu
                    </li>
                </ul>
                <p>Strona serwowana jest przy użyciu CI/CD.</p>
                <Image src={ccs2} alt="Card Comment App product dashboard" />
                <Image src={ccs3} alt="Card Comment App logs view" />
                <Image src={ccs4} alt="Card Comment App product view" />
                <Image src={ccs4} alt="Card Comment App view" />
                <Image src={ccs5} alt="Card Comment App view" />
                <Image src={ccs6} alt="Card Comment App view" />
                <Image src={ccs7} alt="Card Comment App view" />
                <Image src={ccs8} alt="Card Comment App view" />
                <Image src={ccs9} alt="Card Comment App view" />
                <Image src={ccs10} alt="Card Comment App view" />
            </div>
        ),
    },
    {
        href: "https://www.custommerce.pl",
        title: "Custommerce",
        description:
            "Zaprojektowanie i zaimplementowanie strony głównej z ponad 40 podstronami. Podłączenie do autorskiego CMSa przy użyciu API. Strona dostosowana jest do obsługi wielu języków oraz posiada moduł szybkiego budowania nowych podstron.",
        thumbnail: custommerce1,
        stack: ["Next.js", "Tailwindcss", "API", "SSR", "framer-motion", "next-intl", "Docker"],
        slug: "custommerce-home-page",
        content: (
            <div>
                <p>Czas pracy nad całym systemem trwał od maja i planowane zakończenie to koniec października.</p>
                <p>Strona posiada takie moduły jak:</p>
                <ul>
                    <li>system metamorfoz</li>
                    <li>system case-study z dynamicznie zmieniającymi się statystykami live</li>
                    <li>
                        system portfolio zintegrowany z zewnętrznym systemem RCS, który aktualizuje informację o
                        wdrożeniu
                    </li>
                    <li>system blogowy</li>
                </ul>
                <p>Strona serwowana jest przy użyciu CI/CD razem z aktywnym cachowaniem.</p>
            </div>
        ),
    },
    {
        href: "https://www.stealer.pl",
        title: "Stealer - Zalando-Lounge Software",
        description:
            "Mój autorski projekt systemu automatyzacji zakupów na stronie zalando-lounge.pl. Działa od 2019 roku.",
        thumbnail: stealer1,
        stack: ["Next.js", "React.js", "API", "PHP", "HTML", "CSS", "Tampermonkey", "JavaScript", "React-Native", "Przelewy24"],
        slug: "stealer-project",
        content: (
            <div>
                <p>Pierwsza wersja wtyczki powstała w 2019 roku. Zawierała ona podstawowe funkcjonalności, cały kod liczył do 300 linijek.</p>
                <p>Początkowo sprzedaż odbywała się poprzez grupy na Facebooku.</p>
                <p>Z biegiem czasu oprogramowanie rosło w linie kodu i obecnie liczy ponad 100 tysięcy linijek kodu.</p>
                <p>Sysztem zawiera takie funkcjonalności jak:</p>
                <ul>
                    <li>autorski system licencji działający w oparciu o generowane losowo klucze</li>
                    <li>system automatycznych płatności działający w oparciu o Przelewy24</li>
                    <li>panel klienta, w którym może śledzić całą swoją działalność i statystyki swoich zakupów</li>
                    <li>automatyczny system wykrywania problemów z konfiguracją kliencką</li>
                    <li>aplikację mobilną, która przenosi funkcjonalność wtyczki do aplikacji mobilnej - aplikacja była dostępna w Sklepie Play.</li>
                </ul>
                <p>Przez cały okres oprogramowanie klienckie zostało zaaktualizowane ponad 120 razy.</p>
                <p>Dodatkowo osobiście zajmuję się marketingiem, obsługą klienta i pomocą techniczną oraz nagrywam filmy instruktażowe na Youtube (<Link href={"https://www.youtube.com/@mm_marcin3750/videos"} target="_blank">link do kanału</Link>)</p>
                <p>Przez cały okres z oprogramowania skorzystało parę tysięcy osób, natomiast wersja próbna została pobrana ponad 20 tysięcy razy.</p>
                
                <Image src={stealer2} alt="Stealer - zalando louge" />
                <Image src={stealer3} alt="Stealer - zalando louge" />
                <Image src={stealer4} alt="Stealer - zalando louge" />
            </div>
        ),
    },
    {
        title: "Remington One - Landing Page",
        href: "https://www.remingtonone.pl",
        description:
            "Implementacja wyglądu i działania strony internetowej na potrzeby kampanii marketingowej dla nowych produktów z serii Remington ONE.",
        thumbnail: remington1,
        stack: ["HTML", "SCSS", "JavaScript", "API", "CI/CD"],
        slug: "remington-one-lp",
        content: (
            <div>
                <p>
                    Moim zadania było dokładne odwzorowanie projektu graficznego, który został stworzony zgodnie z key
                    visual marki Remington. Podczas tworzenia landing page`a Remington One dbałem o to, żeby strona była
                    zgodna z dobrymi zasadami programowania oraz jednocześnie przyjazna dla użytkowników. W trakcie
                    kampanii otrzymałem zlecenie na ASAP na dodadnie formularza mailowego, który miał zostać spięty
                    razem z zaszyfrowaną bazą danych osobowych (RODO) z możliwością przeglądania zgłoszeń przez
                    użytkowników z odpowiednimi uprawnieniami - udało się temat zamknąć przed deadlinem.
                </p>
                <p>
                    Moim zadaniem było również dodanie niezbędnych narzędzi analitycznych, takich jak: Google Tag
                    Manager, Cookie boota, Captcha, Meta Pixel.
                </p>

                <Image src={remington1} alt="RemingtonONE" />
                <Image src={remington2} alt="RemingtonONE" />
                <Image src={remington3} alt="RemingtonONE" />
            </div>
        ),
    },
    {
        title: "Dynamiczny formularz do wyceniania projektów",
        href: "https://bezplatna-wycena-rich-content.custommerce.pl/",
        description:
            "Zaprojektowanie i implementacja algorytmu obliczającego cene na podstawie wielu czynników podanych przez klienta.",
        thumbnail: frc1,
        stack: ["Next.js", "React.js", "TailwindCSS", "API", "nodemailer", "Docker", "CI/CD"],
        slug: "form-rich-content",
        content: (
            <div>
                <p>
                    Moim zadania było stworzenie strony zawierającej formularz dla klienta, po którego wypełnieniu
                    otrzymywał wycenę projektu. Algorytm miał za zadanie analizować wiele krytycznych danych dot. wyceny
                    i perfekcyjnie dobierać cenę jednostkową do zmieniających się innych warunków projektu wybranych
                    przez klienta. Wypełnione formularze były zapisywane w bazie. Na ich podstawie generowane są
                    docelowe oferty przez inny wewnętrzny system.
                </p>
                <p>
                    Wszystko zostało spięte z prostym CMSem do sprawdzania wypełnionych formularzy i zapamiętywania ich.
                </p>
                <Image src={frc2} alt="Rich Content form" />
                <Image src={frc3} alt="Rich Content form" />
            </div>
        ),
    },
    {
        title: "TeamWork Harmonogram",
        description: "Zaprojektowanie i implementacja systemu zczytującego projekty z aplikacji TeamWork.",
        thumbnail: harmonogram1,
        stack: ["React.js", "TeamWork", "API", "AdobeXD"],
        slug: "harmonogram-teamwork",
        content: (
            <div>
                <p>
                    Moim zadania było stworzenie aplikacji, która zczytuje aktywne projekty z aplikacji TeamWork i
                    prezentuje je w wizualnie atrakcyjny sposób na timeline`ach czasowych. System ma możliwość:
                    <ul>
                        <li>dodania kamieni milowych (milestones)</li>
                        <li>akceptacji wykonania projektu/milestone</li>
                        <li>dwustronnej synchronizacji terminów projektowych z TeamWork</li>
                        <li>przypisania danego etapu projektu dla konkretnego pracownika</li>
                        <li>przeglądanie historii projektowej</li>
                    </ul>
                </p>
                <p>
                    Dzięki tej aplikacji zespół marketingu miał lepszy wgląd w obecny stan projektu. I pozwalał na
                    lepsze zarządzanie wieloma projektami.
                </p>
            </div>
        ),
    },
    {
        title: "Generator hotspotów, sliderów i tabel interaktywnych",
        description: "Zaprojektowanie i implementacja systemu do szybkiego tworzenia komponentów przez drag-and-drop.",
        thumbnail: generator1,
        stack: ["React.js", "TailwindCSS"],
        slug: "generators",
        content: (
            <div>
                <p>
                    Moim zadania było stworzenie aplikacji, która w prosty sposób (drag-and-drop) pozwala na tworzenie
                    komponentów dla kart rich-content, które programista może w prosty sposób wyeksportować w postaci
                    czystego kodu HTML i CSS.
                </p>
                <Image src={generator2} alt="Generators app image" />
                <Image src={generator3} alt="Second Generators app image" />
            </div>
        ),
    },

    {
      title: "RCS MobileApp - aplikacja mobilna do systemu RCS",
      description:
          "Zaprojektowanie i stworzenie aplikacji mobilnej do monitorowania wdrożenia kart produktowych rich-content.",
      thumbnail: rma1,
      stack: ["React-Native", "React", "API", "Android", "Expo", "Push notifications", "charts"],
      slug: "rcs-mobile-app",
      content: (
          <div>
              <p>
                  Moim zadania było stworzenie i napisanie aplikacji mobilnej przy użyciu React-Native i Expo, która
                  na bieżąco aktualizowała statusy wdrożenia kart produktowych na platformy e-commerce i ich aktualny
                  etap projektowania.
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
];
