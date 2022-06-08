import React, { useEffect, useState } from "react";
import MovieCard from "../Molecules/MovieCard";
import Navbar from "../Organisms/Navbar";
import LoginForm from "../Organisms/LoginForm";
import MoviesService from "../../Service/MoviesService";
import { useNavigate } from "react-router-dom";

type Card = {
  name: string;
  imgUrl: string;
};

export default function LandingPage() {
  const [movies, setMovies] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    MoviesService()
      .findAll()
      .then((movies) => setMovies(movies));
  }, [cards]);

  return (
    <>
      <Navbar />

      <img
        src={movies}
        alt="dies ist ein alt text"
        width="400px"
        height="400px"
      ></img>

      {/*c == foreach in java*/}
      {cards.map((c) => (
        <MovieCard url={c.imgUrl} email={c.name} />
      ))}
    </>
  );
}