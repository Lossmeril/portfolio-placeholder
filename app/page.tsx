"use client";

import React from "react";

import portfolioItems from "@/data/portfolioItems";
import GalleryCard from "@/components/card";
import { twMerge } from "tailwind-merge";

const Home = () => {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-[80%]">
        <h2 className="lowercase text-3xl text-left font-extrabold my-6 px-3">
          Portfolio Gallery
        </h2>
        <div
          className={twMerge(
            "flex flex-row flex-wrap justify-left",
            "gallery-flex"
          )}
        >
          {portfolioItems.map((item) => (
            <GalleryCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
