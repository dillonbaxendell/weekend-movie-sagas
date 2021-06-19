import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router';

function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    //Grab ALL of the genres from the genres list (from Redux)
    const genresList = useSelector( store => store.genres);

    //On page load, run these functions
    useEffect(() => {
        //Grab all of the genres for the dropdown (eventually a GET request)
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    //Local State - title, description, poster and genre
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [poster, setPoster] = useState('')
    let [genreToAdd, setGenreToAdd] = useState('');

    //Package up the local state variables to send as one object
    const movieToAdd = {
        title: title,
        poster: poster,
        description: description,
        genre_id: Number(genreToAdd)
    }

    //FUNCTION addNewMovie - runs when you click one image
    const addNewMovie = (event) => {
        console.log('movieToAdd: ', movieToAdd);
        event.preventDefault();

        //send the movieToAdd to SAGA (to eventually POST)
        dispatch({ type: 'ADD_MOVIE', payload: movieToAdd });

        //Clear the state variables
        setTitle('');
        setPoster('')
        setDescription('')
        setGenreToAdd('')

        //go to the movieList page
        history.push('/');
        

    }

    return (
        <>
            <h2>Add Movie</h2>
            <pre>{title}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type='text' placeholder='Poster URL' value={poster} onChange={(event) => setPoster(event.target.value)} />
                <input type='text' placeholder='Description' value={description} onChange={(event) => setDescription(event.target.value)} />
                <select value={genreToAdd} onChange={(event) => setGenreToAdd(event.target.value)} >
                    {genresList.map(genre => {
                        return (
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                        )
                    })}
                </select>
                <input type='submit' value='Add New Movie' />
            </form>

        </>
    )
}

export default AddMovie;