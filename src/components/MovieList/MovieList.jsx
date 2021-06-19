import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
//Other imports
import {useHistory} from 'react-router';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //Function goToDetails
    function goToDetails (movie) {
         console.log('The movie ID:', movie.id);
        //Set the movie to the state in details Reducer
        dispatch({
            type: 'SET_DETAILS',
            payload: movie
        });

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