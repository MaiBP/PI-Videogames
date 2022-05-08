const { Router }= require('express');
const { getAllGenres } = require('../controllers/genres');

//Create routes & controllers

const genresRouter = Router();

genresRouter.get('/genres', getAllGenres);

module.exports = genresRouter;




