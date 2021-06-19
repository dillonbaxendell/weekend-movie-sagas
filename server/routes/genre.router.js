const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get(`/details/:id`, (req, res) => {
  console.log('req.body is', req.params.id);
  // Add query to get all genres
  const queryText = `SELECT "genres".name
                    FROM "genres"
                    JOIN "movies_genres"
                    ON "genres".id = "movies_genres".genre_id
                    JOIN "movies"
                    ON "movies_genres".movie_id = "movies".id
                    where "movies".id = $1;`
    
  pool.query(queryText, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch( err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500);
    })

});

router.get('/', (req, res) => {

  const queryText = `SELECT * FROM genres ORDER BY "name" ASC;`
  pool.query(queryText)
    .then( result => {
      res.send(result.rows);
    })
    .catch( err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500);
    })
})

module.exports = router;