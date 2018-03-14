const { Router } = require("express");
const dirRouter = Router();
const { getDirectors, getOneDirector } = require('../controllers/directorCtrl');




dirRouter.get("/directors", getDirectors);
dirRouter.get("/directors/:id", getOneDirector);

module.exports = dirRouter;
