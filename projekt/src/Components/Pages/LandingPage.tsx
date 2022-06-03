import React, { useEffect, useState } from "react";
import CatImageService from "../../Service/CatImageService";
import MovieCard from "../Organisms/MovieCard";
import Navbar from "../Organisms/Navbar";
import LoginForm from "../Organisms/LoginForm";

type Card = {
  name: string;
  imgUrl: string;
}

export default function LandingPage() {

  const [url, setUrl] = useState<string>("");

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    CatImageService()
      .getRandomCatImage()
      .then((url) => setUrl(url));
  }, [cards]);

  function handleInput(newEmail : string) : void {
    const card : Card = {name : newEmail, imgUrl : url};
    setCards(cards => [...cards, card]);
    console.log(cards);
  }

  return (<>
  <Navbar />
  
  <img src={url} alt="dies ist ein alt text" width = "400px" height = "400px"></img>
    <LoginForm handleInput={handleInput}/>
    {/*c == foreach in java*/}
    {cards.map(c => <MovieCard url={c.imgUrl} email={c.name} />)}
    </>
  );
}