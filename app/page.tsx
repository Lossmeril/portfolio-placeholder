"use client";

import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

import { portfolioItems } from "@/data/portfolioItems";

const Home = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full flex flex-row flex-wrap gap-4">
        {portfolioItems.map((item) => (
          <Card
            key={item.name}
            className="w-[250px] h-[250px] col-span-12 sm:col-span-5"
            isHoverable
            isPressable
          >
            <Image
              alt={item.name}
              className="z-0 w-full h-full object-cover scale-125 -translate-y-6"
              src={item.image}
              fill
            />
            <CardFooter className="absolute bottom-0 z-10">
              <h2 className="text-md font-black z-10">{item.tag.name}</h2>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-black opacity-75 bg-blend-multiply"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
