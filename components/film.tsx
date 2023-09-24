import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { nonAuthorFilms } from "@/data/films";

interface FilmCardProps {
  item: any;
}

const FilmCard: React.FC<FilmCardProps> = ({ item }) => {
  return (
    <div className="basis-2/12 p-3 aspect-[21/29]">
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
          className={twMerge("z-0 w-full h-full object-cover", "card-img")}
          src={item.image}
          fill
        />
      </Card>
      <div>
        <h2 className="text-md font-black z-10">{item.name}</h2>
        <p className={twMerge("text-sm font-thin z-10")}>
          {item.year.toString() +
            ", dir.  " +
            (item.director !== undefined ? item.director : "Michal Špitálský")}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
