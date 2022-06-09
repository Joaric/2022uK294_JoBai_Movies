import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

type Movie = {
  title : string,
  release_date : string,
  major_genre : string,
  id : number
}

export default function BasicCard({title, release_date, major_genre, id} : Movie) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {major_genre}
        </Typography>
        <Typography variant="body2">
          {release_date}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("./movie/" + id)}>Learn more</Button>
      </CardActions>
    </Card>
  );
}
