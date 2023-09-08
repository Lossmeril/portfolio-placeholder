import { Tag } from "./types";

export const tags: Array<Tag> = [
  { name: "design", color: "green" },
  { name: "digital art", color: "rose" },
  { name: "branding", color: "indigo" },
  { name: "photography", color: "amber" },
];

export enum tagEnum {
  "design" = 0,
  "digitalArt" = 1,
  "branidng" = 2,
  "photography" = 3,
}
