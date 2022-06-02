import React, { useEffect, useState } from "react";
import CatImageService from "../../Service/CatImageService";
import MovieCard from "../Organisms/MovieCard";
import Navbar from "../Organisms/Navbar";
import RandomCatForm from "../Organisms/RandomCatForm";

export default function LandingPage() {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    CatImageService()
      .getRandomCatImage()
      .then((url) => setUrl(url));
  }, []);

  return <>
  <Navbar />
  <img src={url} alt="dies ist ein alt text"></img>
    <RandomCatForm />

    </>;
}