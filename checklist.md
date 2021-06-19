[ SET UP - React/Redux ]
    [X] npm install
    [X] npm install redux 
    [X] npm install react-redux
    [X] npm install redux-logger
    [X] npm install react-router-dom
    [x] npm install express
    
    [] Make Components
        
    # Material UI ?
        [X] npm install @material-ui/core
        [X] npm install @material-ui/icons
        [X] npm install @fontsource/roboto
            [X] import '@fontsource/roboto';
    # Bootstrap ?
        [] npm install react-bootstrap bootstrap@4.6.0
    # SweetAlert?
        [] npm install sweetalert --save
        [] import swal from 'sweetalert';
    # IN DATABASE
        [X] Make database and table, etc.. from data.sql
        [  ] Make sure to input at least one data point so you can test your GET route
    # IN APP
        [X] import {Route, HashRouter as Router} from 'react-router-dom';
        [X] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    # IN INDEX.JS 
        [X] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [X] import {Provider} from 'react-redux';
        [X] import logger from 'redux-logger';
        [X] Create Store
            [X] Wrap with combineReducers
                [X] Pass in reducers
            [X] applyMiddleware
                [X] logger
        [X] React.DOM.render
            [X] React.StrictMode?
            [X] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [  ] Service Worker?
    # SERVER.JS
        [X] Express routes created
            [X] movieRouter
            [X] genreRouter
    [ ] EACH ROUTER SHOULD HAVE:
        [XX] const import express = require('express)
        [XX] const router = express.Router();
        [XX] const pool = require('../modules/pool');
        [ X] Post request to database

## REDUX SAGA
   [X] import {takeEvery, put} from 'redux-saga/effects'
   [X] import createSagaMiddleware from 'redux-saga'
      [X] in the store - applyMiddleware(sagaMiddleware, logger)
   [X] const sagaMiddleware = createSagaMiddleware()
   [X] sagaMiddleware.run(rootSaga)

## DATABASE
[X] Set up database
    [X] Copy into a .sql file in this project for future users

### Home / List Page

This view is completed already! It displays all of the movies in the movie database. 

[X] When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
    [X] create a component - Details
    [X] Route to Details
    [X] Create details Reducer
    [X] Dispatch to set details reducer as the movie clicked
    [X] Render all details in the details view
[X] Have a way to get to the Add Movie Page
    [] still need to create AddMovie component


### Details Page

This should show all details **including ALL genres** for the selected movie. You will need to store this data in redux!

 > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

 [X] Make a dispatch to Redux in Details.jsx to get the genres? - ??do we want this in MovieList??
    [X] FETCH_GENRES
    [X] this should send over a payload (movie.id?)
 [X] Make a takeEvery for 'FETCH_GENRES', fetchGenres
 [X] fetchGenres should
    [X] try { axios.get }
    [X] yield put (remember this is like a dispatch)
    [X] catch
[X] genre.router.js
    [X] get all of the genres from database 
    [X] SQL will be important here

- TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

[] If there's a Home button in header, do we really need this?

> Base functionality does not require the movie details to load correctly after refresh of the browser.

### Add Movie Page

This should show:

[] an input field (for the movie title)
[] an input field (for the movie poster image URL))
[] a textarea (for the movie description)
[] a dropdown (for the genres)

The Add Movie page should have the buttons:

- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)

**Base functionality does not require being able to select more than one genre for a new movie**

> Hint: Look at the /api/movie POST route -- it's been made already but is performing 2 queries: one to store the movie information and another to store the genre in the junction table.

> Hint: You'll want to use the genres that are in the db for your dropdown