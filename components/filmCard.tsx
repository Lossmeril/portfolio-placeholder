import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { nonAuthorFilms } from "@/data/films";

interface FilmCardProps {
  item: any;
}

const FilmCard: React.FC<FilmCardProps> = ({ item }) => {
  return (
    <div className="basis-2/12 p-3">
      <div className="aspect-[21/30]">
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
            className={twMerge("z-0 w-full h-full object-stretch", "card-img")}
            src={item.image}
            fill
          />
        </Card>
      </div>
      <div className="mt-4">
        <h2 className="text-md font-black">{item.name}</h2>
        <p className="text-sm font-medium italic">{item.genre}</p>
        <p className={twMerge("text-sm font-thin")}>
          {item.year.toString() +
            ", dir.  " +
            (item.director !== undefined ? item.director : "Michal Špitálský")}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
