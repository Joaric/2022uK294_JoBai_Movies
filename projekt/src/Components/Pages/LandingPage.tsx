import React, { useEffect, useState } from 'react'
import CatImageService from '../../Service/CatImageService';


export default function LandingPage() {

  const [url, setUrl] = useState<string>('https://cdn2.thecatapi.com/images/s_SbQ3Xju.jpg');

  //  useEffect(() => {
  //     CatImageService().getRandomCatImage().then((catImage ) => setUrl(catImage));
  //  }, []);

    return (
        <img src={url} alt="dies ist ein alt text"></img>
    )
}