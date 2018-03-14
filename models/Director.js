const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT directors.*, group_concat(movies.name, ", ") as movies_directed
      FROM directors
      JOIN movies ON movies.director_id = directors.dir_id
      GROUP BY dir_id`,
      (err, direx) => {
        if (err) return reject(err);
        resolve(direx);
      }
    );
  });
};

module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    // This allows us to list all the movies one director has directed
    db.get(
      `SELECT directors.*, group_concat(movies.name, ", ") movies_directed
    FROM directors
    JOIN movies ON dir_id = director_id
    WHERE dir_id = ${id}`,
      (err, movie) => {
        if (err) return reject(err);
        resolve(movie);
      }
    );
  });
};
