
const { Router } = require('express');
const movieRouter = Router();

const { getAllMovies } = require('../controllers/movieCtrl');

movieRouter.get('/movies', getAllMovies);

module.exports = movieRouter;
