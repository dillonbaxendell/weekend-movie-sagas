import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_ALL_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', postMovie);
}

//WORKER SAGA - POST request - make a POST request to the server
function* postMovie(action) {
    //does a POST request
    try {
        yield axios.post('/api/movie', action.payload);

        //Update the moviesList
        yield put({
            type: 'FETCH_ALL_MOVIES'
        })
    } catch (error) {
        console.log('Error in POST newMovie request', error);
    }
}

//WORKER SAGA - fetches ALL of the genres for the dropdown menu in AddMovie
function* fetchAllGenres() {
    //get all genres for a genreList
    try {
        const genres = yield axios.get('/api/genre');
        console.log('GET all genres:', genres.data);

        //Set the reducer as this genre list
        yield put({
            type: 'SET_ALL_GENRES',
            payload: genres.data
        })
    } catch (error) {
        console.log('GET all genres error', error);
    }
}

//WORKER SAGA - fetches genres of ONE movie
function* fetchGenres(action) {
    //get all genres for specific id
    try {
        const movieID = yield axios.get(`/api/genre/details/${action.payload.id}`);
        console.log('What movieID.data is:', movieID.data);
        console.log('GET all genres:', movieID.data);
        yield put({ type: 'SET_GENRES', payload: movieID.data});
    } catch (error) {
        console.log('GET all genres error', error);
    }
}

//WORKER SAGA - this is GETting all of them movies from the database
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('GET all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch (error) {
        console.log('GET all movies error', error);
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'CLEAR_MOVIES' :
            return [];
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        case 'SET_ALL_GENRES' :
            return action.payload;
        case 'CLEAR_GENRES' :
            return [];
        default:
            return state;
    }
}


// Used to store which image to show in /details
const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS' :
            return action.payload
        default :
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
