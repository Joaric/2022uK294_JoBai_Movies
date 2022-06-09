
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import MoviesService from "../../Service/MoviesService";
import { Movies } from "../../Types/MovieModel";
import Navbar from "../Organisms/Navbar";

const validationSchema = yup.object({
  title: yup.string().required("Enter Title"),
  us_gross: yup.string().required("Enter US Gross"),
  worldwide_gross: yup.string().required("Enter Worldwide Gross"),
  us_dvd_sales: yup.string().required("Enter US DVD Sales"),
  production_budget: yup.string().required("Enter Production Budget"),
  release_date: yup.string().required("Enter Release Date"),
  mpaa_rating: yup.string().required("Enter MPAA Rating"),
  running_time: yup.string().required("Enter running time"),
  distributor: yup.string().required("Enter Distributor"),
  source: yup.string().required("Enter Source"),
  genre: yup.string().required("Enter Genre"),
  creative_type: yup.string().required("Enter Creative Type"),
  director: yup.string().required("Enter Director"),
  rotten_tomatoes_rating: yup.string().required("Enter Rotten Tomatoes Rating"),
  imdb_rating: yup.string().required("Enter IMDB rating"),
  imdb_votes: yup.string().required("Enter IMDB votes"),
});

export const AddMovie = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      us_gross: "",
      worldwide_gross: "",
      us_dvd_sales: "",
      production_budget: "",
      release_date: "",
      mpaa_rating: "",
      running_time: "",
      distributor: "",
      source: "",
      genre: "",
      creative_type: "",
      director: "",
      rotten_tomatoes_rating: "",
      imdb_rating: "",
      imdb_votes: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const movie : Movies = {
        Title : values.title,
        'US Gross' : values.us_gross,
        'Worldwide Gross' : values.worldwide_gross,
        "US DVD Sales" : values.us_dvd_sales,
        "Production Budget" : values.production_budget,
        "Release Date" : values.release_date,
        "MPAA Rating" : values.mpaa_rating,
        "Running Time min" : values.running_time,
        "Distributor" : values.distributor,
        Source : values.source,
        "Major Genre" : values.genre,
        "Creative Type" : values.creative_type,
        Director : values.director,
        "Rotten Tomatoes Rating" : values.rotten_tomatoes_rating,
        "IMDB Rating" : values.imdb_rating,
        "IMDB Votes" : values.imdb_votes,
        "id": null
      }
      MoviesService().addMovie(movie).then(() => {
        navigate("/");
      })
    },
  });

  function handleSubmit(values: any): void {
    MoviesService().addMovie(values).then(() => {
      navigate("/");
    })
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="us_gross"
          name="us_gross"
          label="US Gross"
          type="us_gross"
          value={formik.values.us_gross}
          onChange={formik.handleChange}
          error={formik.touched.us_gross && Boolean(formik.errors.us_gross)}
          helperText={formik.touched.us_gross && formik.errors.us_gross}
        />
        <TextField
          fullWidth
          id="worldwide_gross"
          name="worldwide_gross"
          label="Worldwide Gross"
          value={formik.values.worldwide_gross}
          onChange={formik.handleChange}
          error={formik.touched.worldwide_gross && Boolean(formik.errors.worldwide_gross)}
          helperText={formik.touched.worldwide_gross && formik.errors.worldwide_gross}
        />
        <TextField
          fullWidth
          id="us_dvd_sales"
          name="us_dvd_sales"
          label="US DVD Sales"
          value={formik.values.us_dvd_sales}
          onChange={formik.handleChange}
          error={formik.touched.us_dvd_sales && Boolean(formik.errors.us_dvd_sales)}
          helperText={formik.touched.us_dvd_sales && formik.errors.us_dvd_sales}
        />
        <TextField
          fullWidth
          id="production_budget"
          name="production_budget"
          label="Production Budget"
          value={formik.values.production_budget}
          onChange={formik.handleChange}
          error={formik.touched.production_budget && Boolean(formik.errors.production_budget)}
          helperText={formik.touched.production_budget && formik.errors.production_budget}
        />
        <TextField
          fullWidth
          id="release_date"
          name="release_date"
          label="Release Date"
          value={formik.values.release_date}
          onChange={formik.handleChange}
          error={formik.touched.release_date && Boolean(formik.errors.release_date)}
          helperText={formik.touched.release_date && formik.errors.release_date}
        />
        <TextField
          fullWidth
          id="mpaa_rating"
          name="mpaa_rating"
          label="MPAA Rating"
          value={formik.values.mpaa_rating}
          onChange={formik.handleChange}
          error={formik.touched.mpaa_rating && Boolean(formik.errors.mpaa_rating)}
          helperText={formik.touched.mpaa_rating && formik.errors.mpaa_rating}
        />
        <TextField
          fullWidth
          id="running_time"
          name="running_time"
          label="Running Time"
          value={formik.values.running_time}
          onChange={formik.handleChange}
          error={formik.touched.running_time && Boolean(formik.errors.running_time)}
          helperText={formik.touched.running_time && formik.errors.running_time}
        />
        <TextField
          fullWidth
          id="distributor"
          name="distributor"
          label="Distributor"
          value={formik.values.distributor}
          onChange={formik.handleChange}
          error={formik.touched.distributor && Boolean(formik.errors.distributor)}
          helperText={formik.touched.distributor && formik.errors.distributor}
        />
        <TextField
          fullWidth
          id="source"
          name="source"
          label="Source"
          value={formik.values.source}
          onChange={formik.handleChange}
          error={formik.touched.source && Boolean(formik.errors.source)}
          helperText={formik.touched.source && formik.errors.source}
        />
        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="Genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        />
        <TextField
          fullWidth
          id="creative_type"
          name="creative_type"
          label="Creative Type"
          value={formik.values.creative_type}
          onChange={formik.handleChange}
          error={formik.touched.creative_type && Boolean(formik.errors.creative_type)}
          helperText={formik.touched.creative_type && formik.errors.creative_type}
        />
        <TextField
          fullWidth
          id="director"
          name="director"
          label="Director"
          value={formik.values.director}
          onChange={formik.handleChange}
          error={formik.touched.director && Boolean(formik.errors.director)}
          helperText={formik.touched.director && formik.errors.director}
        />
        <TextField
          fullWidth
          id="rotten_tomatoes_rating"
          name="rotten_tomatoes_rating"
          label="Rotten Tomatoes Rating"
          value={formik.values.rotten_tomatoes_rating}
          onChange={formik.handleChange}
          error={formik.touched.rotten_tomatoes_rating && Boolean(formik.errors.rotten_tomatoes_rating)}
          helperText={formik.touched.rotten_tomatoes_rating && formik.errors.rotten_tomatoes_rating}
        />
        <TextField
          fullWidth
          id="imdb_rating"
          name="imdb_rating"
          label="IMDB Rating"
          value={formik.values.imdb_rating}
          onChange={formik.handleChange}
          error={formik.touched.imdb_rating && Boolean(formik.errors.imdb_rating)}
          helperText={formik.touched.imdb_rating && formik.errors.imdb_rating}
        />
        <TextField
          fullWidth
          id="imdb_votes"
          name="imdb_votes"
          label="IMDB Votes"
          value={formik.values.imdb_votes}
          onChange={formik.handleChange}
          error={formik.touched.imdb_votes && Boolean(formik.errors.imdb_votes)}
          helperText={formik.touched.imdb_votes && formik.errors.imdb_votes}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
