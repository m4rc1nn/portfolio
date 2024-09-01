"use client";

import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={`/projects/${product.slug}`}
              key={product.href}
              className="group flex flex-col md:flex-row gap-4 md:gap-y-0 rounded-md"
            >
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                className="rounded-md max-w-full md:max-w-[200px] object-contain"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-xl lg:text-2xl group-hover:font-accent"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap mt-4 gap-2">
                  {product.stack?.map((stack: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
