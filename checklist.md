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

[] When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
    [X] create a component - Details
    [X] Route to Details
    [] 
[] Have a way to get to the Add Movie Page