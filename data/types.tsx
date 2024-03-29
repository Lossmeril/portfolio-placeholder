export type Tag = {
  name: string;
};

// --------- PORTFOLIO

export type PortfolioItem = {
  name: string;
  image: string;
  year: Number;
};

export type GalleryItem = {
  tag: Tag;
  equipment?: string[];
} & PortfolioItem;

// --------- FILM

export type Film = {
  type: "short" | "feature";
  genre: string;
  synopsis: string;
  runtime: number;
  link?: string;
  playLink?: string;
  festivals?: FilmAward[];
} & PortfolioItem;

export type NonAuthorFilm = {
  director: string;
  myRole: string;
} & Film;

export type FilmAward = {
  festival: string;
  award: string;
  year: Number;
};
