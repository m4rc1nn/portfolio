import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | Marcin Kowalczyk"
};

export default function Projects() {
  return (
    <Container>

      <div className="flex flex-row justify-start items-center gap-4 mb-10">
        <span className="text-4xl">✉️</span>
        <Heading className="font-black">Skontaktuj się ze mną</Heading>
      </div>
      <Paragraph>
        Możesz wysłać do mnie wiadomość bezpośrednio na maila lub numer telefonu.
      </Paragraph>
      <Paragraph className="mt-4">
        E-mail: <Link className="text-blue-500 hover:underline" href={"mailto:mkowalczyk193@gmail.com"}>mkowalczyk193@gmail.com</Link>
      </Paragraph>
      <Paragraph className="mb-12">
        Numer telefonu: <Link className="text-blue-500 hover:underline" href={"mailto:mkowalczyk193@gmail.com"}>+48 534-867-318</Link>
      </Paragraph>
      <Contact />
    </Container>
  );
}
