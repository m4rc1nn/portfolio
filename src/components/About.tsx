"use client";

import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { Highlight } from "./Highlight";

export default function About() {
    const images = ["/images/about-1.jpg", "/images/about-2.jpg", "/images/about-3.jpg", "/images/about-4.jpg"];
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
                {images.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{
                            opacity: 0,
                            y: -50,
                            rotate: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: index % 2 === 0 ? 3 : -3,
                        }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}>
                        <Image
                            src={image}
                            width={200}
                            height={400}
                            alt="about"
                            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl">
                <Paragraph className="md:!text-2xl font-semibold">Cześć,</Paragraph>
                <Paragraph className="md:!text-2xl font-semibold">nazywam się Marcin Kowalczyk.</Paragraph>
                <Paragraph className=" mt-4">
                    Jestem programistą z pasją do tworzenia solidnych rozwiązań programistycznych.
                </Paragraph>
                <Paragraph>Cieszę się, że trafiłeś na moją stronę!</Paragraph>
                <Paragraph className=" mt-4">
                    Moja przygoda z programowaniem rozpoczęła się, gdy miałem 13 lat. Wtedy, na lekcjach informatyki,
                    odkryłem <Highlight>Scratch</Highlight> – prostą aplikację, dzięki której mogłem tworzyć własne gry za pomocą kilku
                    kliknięć. Zafascynowała mnie możliwość tworzenia czegoś własnoręcznie — i tak właśnie rozpoczęła się
                    moja podróż w świat kodowania.
                </Paragraph>

                <Paragraph className=" mt-4">
                    Po jakimś czasie Scratch przestał mi wystarczać, więć zacząłem zgłębiać tajniki Minecrafta — wtedy
                    mojej ulubionej gry. Tworzenie serwerów multiplayer dało mi okazję do pisania pierwszego kodu –
                    używałem wtedy języka <Highlight>Skript</Highlight> do tworzenia skryptów na platformie <Highlight>Spigot</Highlight> dla serwerów Minecraft. Moje
                    osiągnięcia w tej dziedzinie można śledzić na forum, na którym działam aktywnie od 2017 roku, i
                    jestem jednym z najbardziej zasłużonych członków{" "}
                    <Link
                        className=" text-blue-500 hover:underline"
                        href={"https://skript.pl/profil/3406-krejzolekpro/"}
                        target="_blank">
                        zobacz profil
                    </Link>
                    .
                </Paragraph>
                <Paragraph className=" mt-4">
                    Kiedy skrypty zaczęły nadmiernie obciążać serwery, postanowiłem przesiąść się na <Highlight>Javę</Highlight> z biblioteką
                    <Highlight>Bukkit</Highlight>. To dało mi solidne podstawy w programowaniu obiektowym – zrozumiałem, jak działa
                    dziedziczenie, polimorfizm, zarządzanie zależnościami i architektura oparta na klasach oraz
                    interfejsach. W międzyczasie, aby poszerzyć swoje umiejętności, zacząłem również eksperymentować z
                    webówką, tworząc proste strony w <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>JavaScript</Highlight> oraz <Highlight>PHP</Highlight>.
                </Paragraph>
                <Paragraph className=" mt-4">
                    Wkrótce potem skoncentrowałem się na programowaniu webowym, które stało się moją główną ścieżką
                    kariery.
                </Paragraph>
                <Paragraph className=" mt-4">
                    W 2022 roku przeprowadziłem się do Poznania, gdzie rozpocząłem swoją pierwszą komercyjną pracę w
                    firmie Custommerce jako FullStack Developer. Na co dzień korzystam z frameworków takich jak <Highlight>Next.js</Highlight>,
                    <Highlight>React.js</Highlight> i <Highlight>Node.js</Highlight>, pracując nad wewnętrznymi systemami firmowymi.
                </Paragraph>
                <Paragraph className=" mt-4">
                    Obecnie w czasie wolnym zgłębiam różne obszary programowania, poszerzając swoją wiedzę i kompetencje
                    w technologiach i narzędziach, które mnie fascynują.
                </Paragraph>
                <Paragraph>
                    Dodatkowo rozwijam swoją wiedzę w zakresie moich pasji – eksploracji kosmosu, motoryzacji oraz
                    szachów, które, podobnie jak programowanie, wymagają strategicznego myślenia i precyzji.
                </Paragraph>
                <Paragraph className=" mt-4">
                    Dziękuję, że poświęciłeś czas na przeczytanie mojej historii. Mam nadzieję, że zaciekawił Cię ten
                    krótki opis.
                </Paragraph>
                <Paragraph className="mt-4">
                    Jeśli masz jakiekolwiek pytania, chętnie na nie odpowiem!{" "}
                    <Link className="text-blue-500 hover:underline" href={"/contact"} target="_blank">
                        Kontakt
                    </Link>
                </Paragraph>
            </div>
        </div>
    );
}
