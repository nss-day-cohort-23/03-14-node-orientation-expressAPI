const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT movies.*, directors.name AS director
    FROM movies
    JOIN directors ON director_id = directors.dir_id`,
      (err, movies) => {
        if (err) return reject(err);
        resolve(movies);
      }
    );
  });
};

module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT movies.*, directors.name AS director
    FROM movies
    JOIN directors ON director_id = directors.dir_id
    WHERE movies.movie_id = ${id}`,
      (err, movie) => {
        if (err) return reject(err);
        resolve(movie);
      }
    );
  });
};

module.exports.getCurrent = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT movies.*, directors.name AS director
    FROM movies
    JOIN directors ON director_id = directors.dir_id
    WHERE movies.inTheaters = 1`,
      (err, movie) => {
        if (err) return reject(err);
        resolve(movie);
      }
    );
  });
};
