import { GalleryItem } from "@/data/types";
import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    <div className="basis-4/12 lg:basis-3/12 xl:basis-2/12 p-3 ">
      <div className="aspect-square">
        <Card
          className={twMerge(
            "w-full h-full outline outline-1 outline-neutral-800 rounded-sm",
            "custom-card"
          )}
          isHoverable
          isPressable
        >
          <Image
            alt={item.name}
            className={twMerge(
              "z-0 w-full h-full object-cover scale-125",
              "card-img"
            )}
            src={item.image}
            fill
          />
        </Card>
      </div>
      <div className="my-4">
        <h2 className="text-md font-black">{item.name}</h2>
        <p className="text-sm font-medium italic">{item.tag.name}</p>
        <p className={twMerge("text-sm font-thin")}>{item.year.toString()}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
