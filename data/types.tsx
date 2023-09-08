export type Tag = {
  name: string;
  color: string;
};

export type PortfolioItem = {
  name: string;
  image: string;
  year: Number;
};

export type GalleryItem = {
  tag: Tag;
  equipment: string[];
} & PortfolioItem;

export type FilmAward = {
  festival: string;
  award: string;
  year: Number;
};

export type Film = {
  synopsis: string;
  runtime: number;
  link?: string;
  playLink?: string;
  festivals?: FilmAward[];
} & PortfolioItem;
