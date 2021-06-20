# MOVIES-SAGA 

## Description

_Duration: Weekend Sprint_

This project works with a database to display a list of Movies with a details view displayed upon clicking a Movie Poster. The app also includes an `Add Movie` feature that allows the user to contribute their favorite movies (title, poster image and description) to the database and `Movie List`. 

Heroku deployment coming soon...

## Screen Shot


![adding](/public/images/Screenshot1.png)
![adding](/public/images/Screenshot3.png)
![adding](/public/images/Screenshot2.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgresSQL](https://www.postgresql.org/)
- [Homebrew](https://brew.sh/)

## Installation

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using [Postico](https://eggerapps.at/postico/) to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. The `Home` page is the `Movie List` view. View the list as a whole for an overview.
2. Once you find a movie you're interested in, click on the Movie Poster to view more `details`, including the genres and description of the movie.
3. On the `details` page, feel free to head back to the `Movie List` by clicking the `Back` button.
4. Now, let's add a movie by clicking the `Add Movie` button -- this will take you to an input Form.
5. Enter the information for the movie you want to add and click `Save` to save it to the database and Movie List.


## Built With

- React
- Redux-Saga
- Node.js
- PostgreSQL
- Axios
- Express
- Material UI


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Personal thanks to Paran, Jonathon, Seth, Vino, Mom and Dad for your continued support.

## Support
If you have suggestions or issues, please email me at [dillon.j.baxendell@gmail.com](www.google.com)