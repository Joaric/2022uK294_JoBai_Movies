
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Navbar from "../Organisms/Navbar";

const validationSchema = yup.object({
  title: yup.string().required("Enter title"),
  us_gross: yup.string().required("Enter US Gross"),
  worldwide_gross: yup.string().required("Enter Worldwide Gross"),
  us_dvd_sales: yup.string().required("Enter US DVD Sales"),
  production_budget: yup.string().required("Enter Production Budget"),
  release_date: yup.string().required("Enter release date"),
  mpaa_rating: yup.string().required("Enter MPAA Rating"),
  running_time: yup.string().required("Enter running time"),
  distributor: yup.string().required("Enter distributor"),
  source: yup.string().required("Enter source"),
  genre: yup.string().required("Enter genre"),
  creative_type: yup.string().required("Enter creative type"),
  director: yup.string().required("Enter director"),
  rotten_tomatoes_rating: yup.string().required("Enter rotten tomatoes rating"),
  imdb_rating: yup.string().required("Enter IMDB rating"),
  imdb_votes: yup.string().required("Enter IMDB votes"),
});


export const AddMovie = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Navbar/>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="us_gross"
          name="us_gross"
          label="us_gross"
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
          label="worldwide_gross"
          value={formik.values.worldwide_gross}
          onChange={formik.handleChange}
          error={formik.touched.worldwide_gross && Boolean(formik.errors.worldwide_gross)}
          helperText={formik.touched.worldwide_gross && formik.errors.worldwide_gross}
        />
        <TextField
          fullWidth
          id="us_dvd_sales"
          name="us_dvd_sales"
          label="us_dvd_sales"
          value={formik.values.us_dvd_sales}
          onChange={formik.handleChange}
          error={formik.touched.us_dvd_sales && Boolean(formik.errors.us_dvd_sales)}
          helperText={formik.touched.us_dvd_sales && formik.errors.us_dvd_sales}
        />
        <TextField
          fullWidth
          id="production_budget"
          name="production_budget"
          label="production_budget"
          value={formik.values.production_budget}
          onChange={formik.handleChange}
          error={formik.touched.production_budget && Boolean(formik.errors.production_budget)}
          helperText={formik.touched.production_budget && formik.errors.production_budget}
        />
        <TextField
          fullWidth
          id="release_date"
          name="release_date"
          label="release_date"
          value={formik.values.release_date}
          onChange={formik.handleChange}
          error={formik.touched.release_date && Boolean(formik.errors.release_date)}
          helperText={formik.touched.release_date && formik.errors.release_date}
        />
        <TextField
          fullWidth
          id="mpaa_rating"
          name="mpaa_rating"
          label="mpaa_rating"
          value={formik.values.mpaa_rating}
          onChange={formik.handleChange}
          error={formik.touched.mpaa_rating && Boolean(formik.errors.mpaa_rating)}
          helperText={formik.touched.mpaa_rating && formik.errors.mpaa_rating}
        />
        <TextField
          fullWidth
          id="running_time"
          name="running_time"
          label="running_time"
          value={formik.values.running_time}
          onChange={formik.handleChange}
          error={formik.touched.running_time && Boolean(formik.errors.running_time)}
          helperText={formik.touched.running_time && formik.errors.running_time}
        />
        <TextField
          fullWidth
          id="distributor"
          name="distributor"
          label="distributor"
          value={formik.values.distributor}
          onChange={formik.handleChange}
          error={formik.touched.distributor && Boolean(formik.errors.distributor)}
          helperText={formik.touched.distributor && formik.errors.distributor}
        />
        <TextField
          fullWidth
          id="source"
          name="source"
          label="source"
          value={formik.values.source}
          onChange={formik.handleChange}
          error={formik.touched.source && Boolean(formik.errors.source)}
          helperText={formik.touched.source && formik.errors.source}
        />
        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        />
        <TextField
          fullWidth
          id="creative_type"
          name="creative_type"
          label="creative_type"
          value={formik.values.creative_type}
          onChange={formik.handleChange}
          error={formik.touched.creative_type && Boolean(formik.errors.creative_type)}
          helperText={formik.touched.creative_type && formik.errors.creative_type}
        />
        <TextField
          fullWidth
          id="director"
          name="director"
          label="director"
          value={formik.values.director}
          onChange={formik.handleChange}
          error={formik.touched.director && Boolean(formik.errors.director)}
          helperText={formik.touched.director && formik.errors.director}
        />
        <TextField
          fullWidth
          id="rotten_tomatoes_rating"
          name="rotten_tomatoes_rating"
          label="rotten_tomatoes_rating"
          value={formik.values.rotten_tomatoes_rating}
          onChange={formik.handleChange}
          error={formik.touched.rotten_tomatoes_rating && Boolean(formik.errors.rotten_tomatoes_rating)}
          helperText={formik.touched.rotten_tomatoes_rating && formik.errors.rotten_tomatoes_rating}
        />
        <TextField
          fullWidth
          id="imdb_rating"
          name="imdb_rating"
          label="imdb_rating"
          value={formik.values.imdb_rating}
          onChange={formik.handleChange}
          error={formik.touched.imdb_rating && Boolean(formik.errors.imdb_rating)}
          helperText={formik.touched.imdb_rating && formik.errors.imdb_rating}
        />
        <TextField
          fullWidth
          id="imdb_votes"
          name="imdb_votes"
          label="imdb_votes"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.imdb_votes && Boolean(formik.errors.imdb_votes)}
          helperText={formik.touched.imdb_votes && formik.errors.imdb_votes}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
