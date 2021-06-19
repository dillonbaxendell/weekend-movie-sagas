import { useDispatch, useSelector } from 'react-redux';

function Details() {

    const movie = useSelector( store => store.details);


    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div>
                <p>{movie.description}</p>
            </div>

        </>
    )
}

export default Details;

