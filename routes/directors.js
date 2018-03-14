const { Router } = require("express");
const dirRouter = Router();
const { getDirectors } = require('../controllers/directorCtrl');




dirRouter.get("/directors", getDirectors);

module.exports = dirRouter;
