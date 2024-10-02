import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";

export default function Home() {
    return (
        <Container>
            <div className="flex flex-row justify-start items-center gap-4 mb-10">
                <span className="text-4xl">👋</span>
                <Heading className="font-black">Cześć! Jestem Marcin</Heading>
            </div>
            <Paragraph className="mt-4">
                Jestem <Highlight><span className="font-semibold">Fullstack Developerem</span></Highlight>, który uwielbia tworzyć aplikacje webowe.
            </Paragraph>
            <Paragraph className="mt-4">Specjalizuje się w takich technologiach jak:</Paragraph>
            <div className="flex flex-wrap mt-4 gap-2">
                {["Next.js", "React.js", "Node.js", "MySQL", "REST API"].map((stack: string) => (
                    <span key={stack} className="text-sm md:text-base bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                        {stack}
                    </span>
                ))}
            </div>
            <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-4xl mt-12 mb-8">
                Nad tym ostatnio pracowałem
            </Heading>
            <Products />
        </Container>
    );
}
