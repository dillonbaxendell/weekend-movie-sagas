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
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
}

function* fetchGenres(action) {
    //get all genres from id
    try {
        const movieID = yield axios.get(`/api/genre/details/${action.payload.id}`);
        console.log('What movieID.data is:', movieID.data);
        console.log('GET all genres:', movieID.data);
        yield put({ type: 'SET_GENRES', payload: movieID.data});
    } catch (error) {
        console.log('GET all genres error', error);
    }
}

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
