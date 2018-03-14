
const { Router } = require('express');
const movieRouter = Router();

const { getAllMovies, getOneMovie } = require('../controllers/movieCtrl');

movieRouter.get('/movies', getAllMovies);
movieRouter.get('/movies/:id', getOneMovie);

module.exports = movieRouter;
