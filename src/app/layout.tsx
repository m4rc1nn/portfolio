import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Marcin Kowalczy - Fullstack Developer",
  description:
    "Marcin Kowalczy jest FullStack Developerem. Tworzy kod w frameworkach i używa narzędzi takich jak: Next.js, React.js i Node.js. Korzysta z Tailwind.CSS, MySQL, Docker, CI/CD.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <NextTopLoader color="#085fc2"
          showSpinner={false}
          easing="ease"
          speed={500}
          height={3}
          zIndex={9999999999999999} />
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
