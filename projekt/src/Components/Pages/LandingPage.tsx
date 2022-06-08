import React, { useEffect, useState } from "react";
import MovieCard from "../Molecules/MovieCard";
import Navbar from "../Organisms/Navbar";
import MoviesService from "../../Service/MoviesService";
import { Movies } from "../../Types/MovieModel";
import { Box } from "@mui/material";

export default function LandingPage() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    MoviesService()
      .findAll()
      .then((movies2: Movies[]) => {
        setMovies(movies2);
      });
  }, []);

  useEffect(() => console.log(movies), [movies]);
  return (
    <>
      <Navbar />
      {/*c == foreach in java*/}
      {movies.map((c: Movies) => {
        return (
          <Box key={c.id}>
            <MovieCard
              title={c.Title}
              release_date={c["Release Date"]}
              major_genre={c["Major Genre"]}
              id={c.id}
            />
          </Box>
        );
      })}
    </>
  );
}
