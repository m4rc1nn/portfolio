"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

import me from "../../public/me.png";

export const Sidebar = () => {
    const [open, setOpen] = useState(isMobile() ? false : true);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.35, ease: "linear" }}
                        exit={{ x: -250 }}
                        className="pl-6 z-[100] py-4 lg:py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-dvh left-0 flex flex-col justify-between">
                        <div className="pr-6 flex-1 overflow-auto">
                            <button
                                className="mb-10 lg:hidden h-12 w-12 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
                                onClick={() => setOpen(!open)}>
                                <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
                            </button>
                            <SidebarHeader />
                            <Navigation setOpen={setOpen} />
                        </div>
                        <div>
                            <Badge href="/pl_cv_marcin_kowalczyk.pdf" text="Zobacz CV" />
                        </div>
                        <div className="mt-4">
                            <Badge href="/en_cv_marcin_kowalczyk.pdf" text="Show CV" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                className="fixed lg:hidden top-4 left-4 h-12 w-12 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
                onClick={() => setOpen(!open)}>
                <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
            </button>
        </>
    );
};

export const Navigation = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <div className="flex flex-col space-y-1 my-6 relative z-[100]">
            {navlinks.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => isMobile() && setOpen(false)}
                    className={twMerge(
                        "text-secondary hover:text-accent transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                        isActive(link.href) && "bg-white shadow-lg text-primary"
                    )}>
                    <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-accent")} />
                    <span>{link.label}</span>
                </Link>
            ))}

            <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-4 px-2">
                Linki
            </Heading>
            {socials.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className={twMerge(
                        "text-secondary hover:text-accent transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
                    )}>
                    <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-accent")} />
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};

const SidebarHeader = () => {
    return (
        <div className="flex space-x-2">
            <Image
                src={me}
                alt="Avatar"
                height="40"
                width="40"
                className="object-cover object-top rounded-full flex-shrink-0"
            />
            <div className="flex text-sm flex-col">
                <p className="font-bold text-primary">Marcin Kowalczyk</p>
                <p className="font-light text-secondary">Fullstack Developer</p>
            </div>
        </div>
    );
};
