import React, { useEffect, useState } from "react";
import MovieCard from "../Molecules/MovieCard";
import Navbar from "../Organisms/Navbar";
import MoviesService from "../../Service/MoviesService";
import { Movies } from "../../Types/MovieModel";
import { Box,  TablePagination } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function LandingPage() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  useEffect(() => {
    MoviesService()
      .findAll(page)
      .then((movies2: Movies[]) => {
        setMovies(movies2);
      });
  }, [page]);

  if(movies.length === 0 ) {
    return (
      <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);
  };

  
  return (
    <>
      <Navbar />
      <TablePagination component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}/>
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
