import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projekty | Marcin Kowalczyk"
};

export default function Projects() {
  return (
    <Container>
      <div className="flex flex-row justify-start items-center gap-4 mb-10">
        <span className="text-4xl">⚡</span>
        <Heading className="font-black">
          Projekty nad którymi miałem okazję pracować
        </Heading>
      </div>
      <Products />
    </Container>
  );
}
