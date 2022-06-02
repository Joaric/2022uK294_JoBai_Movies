import React, { useEffect, useState } from "react";
import CatImageService from "../../Service/CatImageService";

export default function LandingPage() {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    CatImageService()
      .getRandomCatImage()
      .then((catImage) => setUrl(catImage));
  }, []);

  return <img src={url} alt="dies ist ein alt text"></img>;
}
