const videogameRouter = require('./videogames');
const genresRouter = require('./genres');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



//EXPORT ROUTES
module.exports = {
    videogameRouter,
    genresRouter,
};


