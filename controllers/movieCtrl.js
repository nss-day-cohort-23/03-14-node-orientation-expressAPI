
const { getAll } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
  getAll()
  .then( (movies) => {
    res.status(200).json(movies);
  })
  .catch( (err) => {
    next(err);
  });
};
