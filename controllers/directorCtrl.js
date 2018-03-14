
const { getAll, getOne } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
  getAll()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};

module.exports.getOneDirector = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (dir) => {
    res.status(200).json(dir);
  })
  .catch( (err) => next(err));
}
