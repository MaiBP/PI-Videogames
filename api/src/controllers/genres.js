const {genresInDB, getGenre} = require('./utils')


const getAllGenres = async(req,res) =>{
    try{
        await getGenre();
        let genres = await genresInDB();
        genres = genres.map(g =>{
            return {
                id: g.id,
                name: g.name,
            }
        })
        res.send(genres)
    }catch(err){
        res.send({errMsg: err});
    }
}

module.exports = {
    getAllGenres,
};