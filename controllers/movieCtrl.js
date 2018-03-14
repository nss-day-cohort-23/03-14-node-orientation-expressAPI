
const { getAll, getOne } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
  getAll()
  .then( (movies) => {
    res.status(200).json(movies);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneMovie = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (movie) => {
    res.status(200).json(movie);
  })
  .catch( (err) => next(err));
}
