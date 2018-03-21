// const { getAll, getOne } = require("../models/Movie");
const Movie = require("../models/Movie");

module.exports.getAllMovies = ({query: {inTheaters}}, res, next) => {
  const getMovies = inTheaters ? "getCurrent" : "getAll";
  Movie[getMovies]()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getOneMovie = ({ params: { id } }, res, next) => {
  Movie.getOne(id)
    .then(movie => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        let error = new Error("Movie not found")
        next(error)
      }
    })
    .catch(err => next(err));
};
