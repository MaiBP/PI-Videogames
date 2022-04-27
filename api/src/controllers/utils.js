const axios = require('axios');
const {Videogame, Genre} =require('../db');
const { API_KEY } = process.env;


// Get apiInfo 

const getApiInfo = async () => {
    try{
        const videogames = [];
         let apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;
         for (let i = 1; i < 8; i++) {
             let gamesPages = await axios.get(apiUrl);
              gamesPages.data?.results.forEach((e) => {
                videogames.push({
                id: e.id,
                name: e.name,
                rating: e.rating,
                released: e.released,
                background_image: e.background_image,
                genres: e.genres.map((genre) => genre.name),
                platforms: e.platforms.map((platform) => platform.platform.name),
                });
             });
             apiUrl = gamesPages.data.next;
         };
         return videogames;
    } catch(err){
        console.log(err);
    } 
};

// Find videogames in DB.
const getDBinfo = async () => {
    try{
    const info = await Videogame.findAll({
        where: {},
        include: {
            model: Genre,
            attributes: ['name'],
        }
        // include: {
        //     model: Genre,
        //     attributes: ['name'],
        //     through: {
        //         attributes: [],
        //     }
        // }
    })
    //Map to look for videogame
    const gamesWithGenre = info.map((g) => {
       return{
            id: g.dataValues.id,
            name: g.dataValues.name,
            rating: g.dataValues.rating,
            released: g.dataValues.released,
            background_image: g.dataValues.background_image,
            genres: g.dataValues.genres.map((g) => g.dataValues.name), //this gets each genre
            platforms: g.dataValues.platforms,
            description: g.dataValues.description,
            
        }
    })
    return gamesWithGenre;

    }catch(err){
        console.log(err);
    }
}

//Concat videogames from api and genres from DB.

const getAllInfo = async () => {
    try{
        const infoApi = await getApiInfo();
        const gameDb = await getDBinfo();
        const allInfo = [...infoApi, ...gameDb];
        return allInfo;
    }catch(err){
        console.log(err);
    }
}

// Find one videogame
const getOneVideogame = async (id) => {
    try{
        const game = await axios.get(`https://api.rawg.io/api/games/${id}/`);
        const videogame = {
            id: game.data.id,
            name: game.data.name,
            rating: game.data.rating,
            released: game.released,
            background_image: game.data.backround_image,
            genres: game.data.genres.map(g => g.name),
            platforms: game.data.parent_platforms.map(p => p.platform.name),
            description: game.data.description,
        };
        return videogame;

    } catch(err){
        console.log(err);
    }
}
 


// Genres from API saved in DB
const getGenre = async () => {
    try{
        const infoApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        // returns ['Action']
        const apiGenres = infoApi.data.results.map((g) => {
          return { name : g.name };
        }) 
        let dbGenres = await Genre.findAll();
        if (dbGenres.length === 0) {
            await Genre.bulkCreate(apiGenres)
        }
    }catch (err){
        console.log(err);
    }
}


// Get genres in DB 
const genresInDB = async () =>{
    try{
        let genDb = await Genre.findAll();
        genDb = genDb.map(g => g.toJSON());
        // genDb = genDb.map(g => g.toJSON());
        return genDb;

    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getApiInfo,
    getOneVideogame,
    getDBinfo,
    getAllInfo,
    getGenre,
    genresInDB
};


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
// [ ] GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// [ ] POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos