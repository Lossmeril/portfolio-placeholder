import { GalleryItem, Tag } from "./types";

export const tags: Array<Tag> = [
  { name: "design", color: "green" },
  { name: "digital art", color: "bubble-gum" },
  { name: "branding", color: "indigo" },
  { name: "photography", color: "amber" },
  { name: "concept art", color: "yellow" },
];

export enum tagEnum {
  "design" = 0,
  "digitalArt" = 1,
  "branding" = 2,
  "photography" = 3,
  "conceptArt" = 4,
}

const photos: Array<GalleryItem> = [
  {
    name: "Gardener's Paradise",
    tag: tags[tagEnum.photography],
    image: "/img/photos/gardeners paradise.jpg",
    year: 2023,
    equipment: ["Canon EOS RP"],
  },
  {
    name: "Theatre Photography 1",
    tag: tags[tagEnum.photography],
    image: "/img/photos/theatre-1.jpg",
    year: 2022,
  },
  {
    name: "Theatre Photography 2",
    tag: tags[tagEnum.photography],
    image: "/img/photos/theatre-2.jpg",
    year: 2022,
  },
  {
    name: "Theatre Photography 3",
    tag: tags[tagEnum.photography],
    image: "/img/photos/theatre-3.jpg",
    year: 2022,
  },
  {
    name: "Neon Canvas",
    tag: tags[tagEnum.photography],
    image: "/img/photos/neon canvas.jpg",
    year: 2022,
  },
  {
    name: "Soul in a city of dreams",
    tag: tags[tagEnum.photography],
    image: "/img/photos/soul in a city of dreams.jpg",
    year: 2022,
  },
];

const art: Array<GalleryItem> = [
  {
    name: "Rise of Pilgrims Art",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/rise of pilgrims art.jpg",
    year: 2022,
    equipment: ["Adobe Illustrator"],
  },
  {
    name: "Burning Desire",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/burning desire.jpg",
    year: 2023,
    equipment: ["Adobe Illustrator"],
  },
  {
    name: "Cyberwagon",
    tag: tags[tagEnum.conceptArt],
    image: "/img/art/Cyberwagon.jpg",
    year: 2023,
    equipment: ["Adobe Photoshop"],
  },
  {
    name: "Dream On",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/dream on.jpg",
    year: 2023,
    equipment: ["Adobe Illustrator"],
  },
  {
    name: "Ghibli Vibes",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/ghibli vibes.jpg",
    year: 2022,
    equipment: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    name: "Knights from the Land of a Morning Star",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/knights form the land of a morning star.jpg",
    year: 2022,
    equipment: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    name: "Masks",
    tag: tags[tagEnum.digitalArt],
    image: "/img/art/masks.jpg",
    year: 2022,
    equipment: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];

const portfolioItems = art.concat(photos);

export default portfolioItems;
