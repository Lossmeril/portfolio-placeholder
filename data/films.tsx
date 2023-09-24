import { Film, FilmAward, NonAuthorFilm } from "./types";

export const films: Array<Film> = [
  {
    name: "Send Me an Angel",
    image: "/img/film/send-me-an-angel.jpg",
    year: 2018,
    type: "short",
    genre: "fantasy music video",
    synopsis: "",
    runtime: 4,
    festivals: [{ festival: "České vize", year: 2018, award: "2nd place" }],
  },
];

export const nonAuthorFilms: Array<NonAuthorFilm> = [
  {
    name: "Like Real Adults Do",
    image: "/img/film/like-real-adults-do.jpg",
    year: 2023,
    type: "short",
    genre: "drama",
    synopsis: "",
    runtime: 8,
    festivals: [],
    director: "Amelia Morek",
    myRole: "production assistant",
  },
  {
    name: "Nine To Five",
    image: "/img/film/like-real-adults-do.jpg",
    year: 2023,
    type: "short",
    genre: "drama",
    synopsis: "",
    runtime: 8,
    festivals: [],
    director: "Gareth Matthews",
    myRole: "production assistant",
  },
];
