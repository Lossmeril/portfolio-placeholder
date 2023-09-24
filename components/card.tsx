import { GalleryItem } from "@/data/types";
import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    <div className="basis-2/12 p-3 aspect-square">
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
        <CardFooter
          className={twMerge("absolute z-10 rounded-none", "card-footer")}
        >
          <div className="w-full flex flex-col justify-start text-left">
            <h2 className="text-md font-black z-10">{item.name}</h2>
            <p className={twMerge("text-sm font-thin z-10")}>{item.tag.name}</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-75 bg-blend-multiply"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GalleryCard;
