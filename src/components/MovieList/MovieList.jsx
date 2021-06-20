//STYLING
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
//Other imports
import {useHistory} from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 350,
      width: 250,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function MovieList() {
    //access history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    //set movies as the movies reducer from Redux
    const movies = useSelector(store => store.movies);
    const classes = useStyles();

    //On page load, run these functions
    useEffect(() => {
        //Grab all of the movies from the movies Reducer
        dispatch({ type: 'FETCH_ALL_MOVIES' });
    }, []);

    //Function goToDetails
    //takes the individual movie object as props
    function goToDetails (movie) {
         console.log('The movie ID:', movie.id);

        //Set the movie to the state in details Reducer
        //sends this to details reducer (which movie we should be seeing in /details)
        dispatch({
            type: 'SET_DETAILS',
            payload: movie
        });

        //FETCH the genres based on the specific movie we click on
        dispatch({
            type: 'FETCH_GENRES',
            payload: {id: movie.id}
        });

        //Go to the details page 
        history.push('/details');
    }

    return (
    <>
        <Grid container direction="column" alignItems="center" justify="center" className={classes.root}>
            <Grid className="movies">

                {movies.map(movie => {
                    return (
                        <Card variant="outlined" className="movies">
                        <CardActionArea>
                        <CardContent className={classes.paper} key={movie.id} >
                            <Typography variant="h6">
                                {movie.title}
                            </Typography>
                            <img className="image" src={movie.poster} alt={movie.title} onClick={(event) => {goToDetails(movie)}}/>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                    );
                })}

            </Grid>
        </Grid>
</>
    );
}

export default MovieList;