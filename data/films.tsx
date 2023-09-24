import { Film, FilmAward, NonAuthorFilm } from "./types";

const films: Array<Film> = [
  {
    name: "Send Me an Angel",
    image: "",
    year: 2018,
    type: "short",
    genre: "fantasy music video",
    synopsis: "",
    runtime: 4,
    festivals: [{ festival: "České vize", year: 2018, award: "2nd place" }],
  },
];

const nonAuthorFilms: Array<NonAuthorFilm> = [
  {
    name: "Like Real Adults Do",
    image: "",
    year: 2023,
    type: "short",
    genre: "drama",
    synopsis: "",
    runtime: 8,
    festivals: [],
    director: "Amelia Morek",
    myRole: "production assistant",
  },
];

const filmItems = films.concat(nonAuthorFilms);

export default filmItems;
