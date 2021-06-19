import { useSelector } from 'react-redux';
import {useHistory} from 'react-router';

function Details() {

    const movie = useSelector( store => store.details);
    const genres = useSelector( store => store.genres);

    const history = useHistory();

    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
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
            <div>
                <p>{movie.description}</p>
            </div>
            <div>
                <button onClick={() => history.push('/')}>Back</button>
            </div>

        </>
    )
}

export default Details;

