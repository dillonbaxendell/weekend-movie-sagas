//Styling
import "./Details.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Button, Typography, Grid } from '@material-ui/core';
//React imports
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 650,
    },
  });

function Details() {
    const classes = useStyles();

    const movie = useSelector( store => store.details);
    const genres = useSelector( store => store.genres);

    const history = useHistory();

    return (
    <main>
    <Grid container direction="column" alignItems="center" justify="center">
        <div className="grid">
        <Grid item >
        <Card className={classes.root}>
            <CardActionArea>
            <img className="image"
                 src={movie.poster} 
                 alt={movie.title} 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                </Typography>
            <div>
                <h4>Genres:</h4>
                {genres.map(genre => {
                    return (
                        <div key={genre.name} >
                            <h4>{genre.name}</h4>
                        </div>
                    );
                })}
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
                {movie.description}
            </Typography>
            </CardContent>
            <div className="button">
                <Button variant="outlined" onClick={() => history.push('/')}>Back</Button>
            </div>
            </CardActionArea>
        </Card>
        </Grid>
        </div>
        </Grid>
        </main>
    )
}

export default Details;

