"use client";

import FilmCard from "@/components/filmCard";
import { films, nonAuthorFilms } from "@/data/films";
import React from "react";
import { twMerge } from "tailwind-merge";

const FilmPage = () => {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-[80%]">
        <h2 className="lowercase text-3xl text-left font-extrabold my-6 px-3">
          Filmography
        </h2>
        <div
          className={twMerge(
            "flex flex-row flex-wrap justify-left",
            "gallery-flex"
          )}
        >
          {films.map((film) => (
            <FilmCard key={film.name} item={film} />
          ))}
        </div>
        <h2 className="lowercase text-3xl text-left font-extrabold my-6 px-3">
          Other film experience
        </h2>

        <div
          className={twMerge(
            "flex flex-row flex-wrap justify-left",
            "gallery-flex"
          )}
        >
          {nonAuthorFilms.map((film) => (
            <FilmCard key={film.name} item={film} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FilmPage;
