import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

function AddMovie() {
    const dispatch = useDispatch();

    //Initial state is an OBJECT, with keys id and name
    let [newMovie, setMovie] = useState({
                                    id: 15, 
                                    title: '',
                                    poster: '',
                                    description: ''
                                });

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
        console.log('changes happened');
        //Similar to in redux -- we don't want to get rid of the id field when we update description
        setMovie({...newMovie, description: event.target.value})
    }

    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
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
                <input type='submit' value='Add New Movie' />
            </form>

        </>
    )
}

export default AddMovie;