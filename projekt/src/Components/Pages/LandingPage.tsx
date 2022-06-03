import React, { useEffect, useState } from "react";
import CatImageService from "../../Service/CatImageService";
import MovieCard from "../Organisms/MovieCard";
import Navbar from "../Organisms/Navbar";
import LoginForm from "../Organisms/LoginForm";

export default function LandingPage() {


  return (<>
  <Navbar />
    <MovieCard />
    </>
  );
}