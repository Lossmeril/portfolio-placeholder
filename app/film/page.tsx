"use client";

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
            "flex flex-col flex-wrap justify-left",
            "gallery-flex"
          )}
        >
          {films.map((film) => (
            <div key={film.name} className="flex flex-row gap-1">
              <h2 className="text-lg font-black lowercase">{film.name}</h2>
              <p>({film.year.toString()})</p>
              <p>{"dir. Michal Špitálský"}</p>
            </div>
          ))}
        </div>
        <h2 className="lowercase text-3xl text-left font-extrabold my-6 px-3">
          Other film experience
        </h2>
        <div
          className={twMerge(
            "flex flex-col flex-wrap justify-left",
            "gallery-flex"
          )}
        >
          {nonAuthorFilms.map((film) => (
            <div key={film.name} className="flex flex-row gap-1">
              <h2 className="text-lg font-black lowercase">{film.name}</h2>
              <p>
                {"(" +
                  film.year.toString() +
                  ", " +
                  "dir. " +
                  film.director +
                  ")"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FilmPage;
