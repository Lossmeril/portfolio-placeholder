import { GalleryItem, Tag } from "./types";

export const tags: Array<Tag> = [
  { name: "design", color: "green" },
  { name: "digital art", color: "bubble-gum" },
  { name: "branding", color: "indigo" },
  { name: "photography", color: "amber" },
];

export enum tagEnum {
  "design" = 0,
  "digitalArt" = 1,
  "branding" = 2,
  "photography" = 3,
}

const photos: Array<GalleryItem> = [
  {
    name: "Hanča",
    tag: tags[tagEnum.photography],
    image: "/img/Hannah.jpg",
    year: 2022,
    equipment: ["Canon EOS RP"],
  },
];

const art: Array<GalleryItem> = [
  {
    name: "Rise of Pilgrims Art",
    tag: tags[tagEnum.digitalArt],
    image: "/img/Pilgrimáž.png",
    year: 2022,
    equipment: ["Adobe Illustrator"],
  },
];

export const portfolioItems = art.concat(photos);
