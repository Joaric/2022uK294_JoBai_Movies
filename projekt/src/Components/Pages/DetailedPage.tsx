import { Box, Container, Paper, Stack } from "@mui/material";
import React from "react";
import DetailMovieCard from "../Molecules/DetailMovieCard";
import Navbar from "../Organisms/Navbar";

const DetailedPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Stack sx={{justifyContent: 'center'}}>
            <DetailMovieCard />
        </Stack>
      </Container>
    </>
  );
};

export default DetailedPage;