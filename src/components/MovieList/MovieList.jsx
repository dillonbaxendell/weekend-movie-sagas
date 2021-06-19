import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
//Other imports
import {useHistory} from 'react-router';

function MovieList() {
    //access history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    //set movies as the movies reducer from Redux
    const movies = useSelector(store => store.movies);

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
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={(event) => {goToDetails(movie)}}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;