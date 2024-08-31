import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "O mnie | Marcin Kowalczyk"
};

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-row justify-start items-center gap-4 mb-10">
        <span className="text-4xl">💬</span>
        <Heading className="font-black">O mnie</Heading>
      </div>
      <About />
    </Container>
  );
}
