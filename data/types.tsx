type Tag = {
  name: string;
  color: string;
};

type PortfolioItem = {
  name: string;
  image: string;
  year: Number;
};

type GalleryItem = {
  tag: Tag;
  equipment: string[];
} & PortfolioItem;

type FilmAward = {
  festival: string;
  award: string;
  year: Number;
};

type Film = {
  synopsis: string;
  runtime: number;
  link?: string;
  playLink?: string;
  festivals?: FilmAward[];
} & PortfolioItem;
