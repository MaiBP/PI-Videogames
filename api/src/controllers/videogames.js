const { Videogame, Genre } = require('../db');

const { Op } = require ('sequelize');
const { getOneVideogame, getApiInfo, getDBinfo, getAllInfo } = require('./utils');


// --- GET all or a single videogame ---// 

const getVG = async (req, res) => {
 try{
    const {name} = req.query; 
    const allInfo = await getAllInfo();
    if(name){ //both names to lowercase & takes up to 16 characters
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

// --- GET single videogame by ID --- //

const getSingleVG = async (req, res ) => {
    try{
        const {id} = req.params 
         //search from DB
         if(id.length > 7 && typeof id === 'string'){
            const dbVideogame = await getDBinfo();
            const singleDbVG = dbVideogame.find((v) => v.id === id);
             return res.status(200).send(singleDbVG)
         }else{//search from API // 
             const singleApiVG = await getOneVideogame(id);
             return res.status(200).send(singleApiVG);
         }
    } catch(err){
        res.status(400).send( {err: "Videogame not found"});
    }
};


// --- Create a new videogame = post --- //
const createVG = async (req, res) => {
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



//--- Update a videogame --- //
const updateVG = async (req,res) => {
    try{
        const {id } = req.params;
        // search for correct id
        let updatedVG = await Videogame.findOne({
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
        // find matching genre in db 
        let genresInDB = await Genre.findAll({
            where: {
                name:{
                    [Op.in]: req.body.genres
                }
            }
        
        }); 
        //state genres & update!
        await updatedVG.setGenres(genresInDB);
        res.status(200).send(updatedVG);

    } catch (err){
        res.status(400).send(err);
    };
};   


//--- Delete a videogame --- //
const deleteVG = async(req,res) => {
    try{
    const { id } = req.params; // find correct id 
    const deletedVG = await Videogame.findByPk(id);
    if(deletedVG){
        await deletedVG.destroy(); // it will delete
        return res.send('Videogame deleted!');
    }
    res.status(400).send('Videogame not found');
    }catch(err){
        res.status(400).send({errMsg: err})
    }
};

module.exports = {
    getVG,
    getSingleVG,
    createVG,
    updateVG,
    deleteVG 
};
