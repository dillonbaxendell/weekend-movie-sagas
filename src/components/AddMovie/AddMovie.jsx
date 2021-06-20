//STYLING
import './AddMovie.css'
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
//Other imports
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
  media: {
    height: 650,
  },
});

function AddMovie() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  //Grab ALL of the genres from the genres list (from Redux)
  const genresList = useSelector((store) => store.genres);

  //On page load, run these functions
  useEffect(() => {
    //Grab all of the genres for the dropdown (eventually a GET request)
    dispatch({ type: "FETCH_ALL_GENRES" });
  }, []);

  //Local State - title, description, poster and genre
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [poster, setPoster] = useState("");
  let [genreToAdd, setGenreToAdd] = useState("");

  //Package up the local state variables to send as one object
  const movieToAdd = {
    title: title,
    poster: poster,
    description: description,
    genre_id: Number(genreToAdd),
  };

  //FUNCTION addNewMovie - runs when you click one image
  const addNewMovie = (event) => {
    console.log("movieToAdd: ", movieToAdd);
    event.preventDefault();

    //send the movieToAdd to SAGA (to eventually POST)
    dispatch({ type: "ADD_MOVIE", payload: movieToAdd });

    //Clear the state variables
    setTitle("");
    setPoster("");
    setDescription("");
    setGenreToAdd("");

    //go to the movieList page
    history.push("/");
  };

  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
          <div className="grid">
        <Grid item >
          <Card className={classes.root}>
            <Typography variant="h2">Add Movie</Typography>
            <FormControl onSubmit={addNewMovie}>
              <TextField
                variant="outlined"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <TextField
                variant="outlined"
                type="text"
                placeholder="Poster URL"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
              />

              <TextField
                variant="outlined"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />

              <Select
                labelId="genre"
                value={genreToAdd}
                onChange={(event) => setGenreToAdd(event.target.value)}
              >
                {genresList.map((genre) => {
                  return (
                    <MenuItem key={genre.id} value={genre.id}>
                      {genre.name}
                    </MenuItem>
                  );
                })}
              </Select>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Save"
              >
                Save
              </Button>
              <Button className="button"
                variant="outlined"
                color="primary"
                onClick={() => history.push("/")}
              >
                Cancel
              </Button>
            </FormControl>
          </Card>
        </Grid>
        </div>
      </Grid>
    </>
  );
}

export default AddMovie;
