const { Videogame, Genre } = require('../db');

const { Op } = require ('sequelize');
const { getOneVideogame, getApiInfo, getDBinfo, getAllInfo } = require('./utils');


//GET all or a single videogame by name(query)
// if there's a query, it shows the first 15 videogames matches. 
const getVG = async (req, res) => {
 try{
    const {name} = req.query;
    const allInfo = await getAllInfo();
    if(name){
        let videogame = allInfo.filter((v) => v.name.toLowerCase().includes(name.toLowerCase())).slice(0,16);
        videogame.length
        ? res.status(200).send(videogame)
        : res.status(400).send('Videogame not found')

    } else {
    // If there's not query will show all videogames.
        res.status(200).send(allInfo)
    }; 
 }catch(error){
     res.status(400).send({errorMsg: error });
 }
};

//Get single videogame by ID

const getSingleVG = async (req, res ) =>{
    try{
        const {id} = req.params 
        //search from API //  if id.length > 7 && typeof id === 'string'-->don't work!
         if(id.length > 7){
             const singleApiVG = await getOneVideogame(id);
             res.status(200).send(singleApiVG);
         }else{
             //search from DB
             const dbVideogame = await getDBinfo();
             const singleDbVG = dbVideogame.find((v) => v.id === id);
             return singleDbVG
             ? res.send(singleDbVG)
             : res.status(400).send("Videogame not found");
         }

    }catch(err){
        res.status(400).send({errMsg: err})
    }
};


// Create a new videogame. = post
const createVG = async (req, res) =>{
 try{
    //create videogame
     const newVideogame = await Videogame.create({
     name: req.body.name,
     rating: req.body.rating,
     background_image: req.body.background_image,
     released: req.body.released,
     description: req.body.description,
     platforms: req.body.platforms,
   
    })
    // find the matching genres from client-db
    let genresInDB = await Genre.findAll({
        where:{
            name: {
                [Op.in]: req.body.genres,
            }
        }
    });
    //add genres
    await newVideogame.addGenres(genresInDB);
    res.status(201).send({
        succMsg: 'Videogame added successfuly!'
    });
 }catch(err){
     res.status(400).send({errMsg: err})
 }
}



// Update a videogame
const updateVG = async (req,res) => {
 try{
        const {id} = req.params;
        console.log("1")
        const updatedVG = await Videogame.findOne({
            where:{
                id: id,
            },
        });

     await updatedVG.update({
        name: req.body.name,
        description: req.body.description,
        released: req.body.released,
        rating: req.body.rating,
        platforms: req.body.platforms,
        background_image: req.body.background_image,
      });

   console.log("2")
    let genresInDB = await Genre.findAll({
        where: {
            name:{
                [Op.in]: req.body.genres
            }
        }
    });
    console.log("3")
    await updatedVG.setGenres(genresInDB); 
    return res.status(200).send("ok");
   
    }catch(err){
    
     res.status(400).send({errMsg: err})
     }
};

// // Delete a videogame
const deleteVG = async(req,res)=>{
    try{
    const { id } = req.params;
    const deletedVG = await Videogame.findByPk(id);
    if(deletedVG){
        await deletedVG.destroy();
        return res.send('Videogame deleted!');
    }
    res.status(400).send('Videogame not found');
    }catch(err){
        res.status(400).send({errMsg: err})
    }
}

module.exports = {
getVG,
getSingleVG,
createVG,
updateVG,
deleteVG 
}















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
// [ ] GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// [ ] POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos