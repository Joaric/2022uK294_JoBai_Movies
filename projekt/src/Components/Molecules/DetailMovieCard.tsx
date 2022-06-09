import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "http";
import { Movies } from "../../Types/MovieModel";
import MoviesService from "../../Service/MoviesService";
import { Button, Stack } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = React.useState<Movies>();

  useEffect(() => {
    MoviesService()
      .getMovieById(id)
      .then((response) => {
        setMovie(response);
      });
  });


  const handleDelete = () => {
    MoviesService().deleteMovieById(id).then(() => {
      navigate("/")
    });
  };

  return (
    <>
      {movie && (
        <TableContainer
          component={Paper}
          sx={{ height: "100vh", justifyContent: "center", display: "flex" }}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">{movie!.Title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>US Gross</TableCell>
                <TableCell align="right">{movie!["US Gross"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Worldwide Gross</TableCell>
                <TableCell align="right">{movie!["Worldwide Gross"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>US DVD Sales</TableCell>
                <TableCell align="right">{movie!["US DVD Sales"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Production Budget</TableCell>
                <TableCell align="right">
                  {movie!["Production Budget"]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Release Date</TableCell>
                <TableCell align="right">{movie!["Release Date"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MPAA Rating</TableCell>
                <TableCell align="right">{movie!["MPAA Rating"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Running Time(in Minutes)</TableCell>
                <TableCell align="right">
                  {movie!["Running Time min"]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Distributor</TableCell>
                <TableCell align="right">{movie!["Distributor"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell align="right">{movie!["Source"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Major Genre</TableCell>
                <TableCell align="right">{movie!["Major Genre"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Creative Type</TableCell>
                <TableCell align="right">{movie!["Creative Type"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Director</TableCell>
                <TableCell align="right">{movie!["Director"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rotten Tomatoes Rating</TableCell>
                <TableCell align="right">
                  {movie!["Rotten Tomatoes Rating"]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IMDB Rating</TableCell>
                <TableCell align="right">{movie!["IMDB Rating"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IMDB Votes</TableCell>
                <TableCell align="right">{movie!["IMDB Votes"]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">{movie!.id}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      )}
      <Stack
        direction="row"
        spacing={2}
        mt="15px"
        sx={{ justifyContent: "end" }}
      >
        <Button variant="contained" color="error" onClick={() => {handleDelete()}}>
          Delete
        </Button>
        <Button variant="contained" color="success">
          Edit
        </Button>
      </Stack>
    </>
  );
}
