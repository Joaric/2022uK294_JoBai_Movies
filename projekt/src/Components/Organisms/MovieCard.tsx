import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CatImageService from '../../Service/CatImageService';
import LoginForm from './LoginForm';

type Card = {
  name: string;
  imgUrl: string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {

  const [url, setUrl] = useState<string>("");

  const [cards, setCards] = useState<Card[]>([]);

  React.useEffect(() => {
    CatImageService()
      .getRandomCatImage()
      .then((url) => setUrl(url));
  }, [cards]);

  function handleInput(newEmail : string) : void {
    const card : Card = {name : newEmail, imgUrl : url};
    setCards(cards => [...cards, card]);
    console.log(cards);
  }
  
  return (
    <>
    <img src={url} alt="dies ist ein alt text"></img>
    <LoginForm handleInput={handleInput}/>
    {cards.map(c => <img src={c.imgUrl} alt="cards"></img>)}
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {cards.map(c => <p>{c.name}</p>)}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> 
    </Card>
    </>
  );
}
