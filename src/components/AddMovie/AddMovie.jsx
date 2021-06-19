import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {
    const dispatch = useDispatch();

    const genresList = useSelector( store => store.allGenres)
    console.log(genresList);


    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    //Initial state is an OBJECT, with keys id and name
    let [newMovie, setMovie] = useState({
                                    id: 15, 
                                    title: '',
                                    poster: '',
                                    description: ''
                                });
    let [genreToAdd, setGenreToAdd] = useState('');

    console.log(newMovie);

    const handleTitleChange = (event) => {
        console.log('changes happened');
        //Similar to in redux -- we don't want to get rid of the id field when we update title
        setMovie({...newMovie, title: event.target.value})
    }

    const handlePosterChange = (event) => {
        console.log('changes happened');
        //Similar to in redux -- we don't want to get rid of the id field when we update poster
        setMovie({...newMovie, poster: event.target.value})
    }

    const handleDescriptionChange = (event) => {
        console.log('changes happened for newMovie');
        //Similar to in redux -- we don't want to get rid of the id field when we update description
        setMovie({...newMovie, description: event.target.value})
    }

    // const handleCategoryChange = (event) => {
    //     console.log('changes happened for category');
    //      //Similar to in redux -- we don't want to get rid of the id field when we update description
    //     setCategory({...category, movie_id: newMovie.id, genre_id: event.target.value})
    // }

    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        // dispatch({ type: 'ADD_GENRE', payload: category });
        //updates the next plant to have a new id
        setMovie({id:newMovie.id + 1, name: ''});


    }


    return (
        <>
            <h2>Add Movie</h2>
            <pre>{newMovie.title}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' placeholder='Title' value={newMovie.title} onChange={handleTitleChange} />
                <input type='text' placeholder='Poster URL' value={newMovie.poster} onChange={handlePosterChange} />
                <input type='text' placeholder='Description' value={newMovie.description} onChange={handleDescriptionChange} />
                <select value={genreToAdd} onChange={(event) => setGenreToAdd(event.target.value)} >
                    {genresList.map(genre => {
                        return (
                                <option key={genre.id}>{genre.name}</option>
                        )
                    })}
                </select>
                <input type='submit' value='Add New Movie' />
            </form>

        </>
    )
}

export default AddMovie;