"use client";

import React from "react";

import portfolioItems from "@/data/portfolioItems";
import GalleryCard from "@/components/card";

const Home = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full flex flex-row flex-wrap gap-4">
        {portfolioItems.map((item) => (
          <GalleryCard key={item.name} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
