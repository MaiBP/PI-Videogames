const { Router } = require('express');
const {
    getVG,
    getSingleVG,
    createVG,
    updateVG,
    deleteVG 
} = require ('../controllers/videogames')


// Create routes & controllers
const videogameRouter = Router();

// GET /videogames 
videogameRouter.get('/videogames', getVG);

// // GET /videogames/{idVideogame}:
videogameRouter.get('/videogames/:id', getSingleVG)


// // POST /videogames
videogameRouter.post('/videogames', createVG)

// // PUT /videogames/:id
videogameRouter.put('/videogames/:id', updateVG)

// // DELETE /videogames/:id
videogameRouter.delete('/videogames/:id', deleteVG)

module.exports = videogameRouter;


