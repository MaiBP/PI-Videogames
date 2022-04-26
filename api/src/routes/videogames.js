const { Router } = require('express');
const {
    getVG,
    getSingleVG,
    createVG,
    // updateVG,
    // deleteVG 
} = require ('../controllers/videogames')


// Create routes & controllers
const videogameRouter = Router();

// GET /videogames // videogame's list (first 15 videogames) 
videogameRouter.get('/videogames', getVG);

// // GET /videogames/{idVideogame}:
videogameRouter.get('/videogames/:id', getSingleVG)


// // POST /videogames
videogameRouter.post('/videogames', createVG)

// // PUT /videogames
// videogameRouter.put('/videogames/:id', updateVG)

// // DELETE /videogames
// videogameRouter.delete('/videogames/:id', deleteVG)

module.exports = videogameRouter;


// Backend
// Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

// IMPORTANTE: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

// [ ] GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
// [ ] GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado
// [ ] GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados

// [ ] POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos