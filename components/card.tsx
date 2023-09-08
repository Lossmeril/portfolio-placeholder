"use client";

import { GalleryItem } from "@/data/types";
import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    <Card
      className="w-[200px] h-[250px] col-span-12 sm:col-span-5 outline outline-1 outline-neutral-800"
      isHoverable
      isPressable
      isFooterBlurred
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
  );
};

export default GalleryCard;
