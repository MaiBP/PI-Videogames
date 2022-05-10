import axios from 'axios';

//--- connection ---//
//--- All games data ---//
export function getVideogames(){
    return async function (dispatch){
    try{
        const url = await axios.get('http://localhost:3001/videogames')
        console.log(url)
        return dispatch({
        type: 'GET_VIDEOGAMES',
        payload: url.data
    })
    }catch(err){
        console.log(err)
    } 
   } 
}
//-- One game data --//

export const getByName = (name) => {
    return async function (dispatch) {
        try{
            const oneGame = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch ({
            type: 'GET_BY_NAME',
            payload: oneGame.data
            })
        } catch(err){
            console.log(err)
        } 
    }
}

//-- Get BY ID

export const getGameId = (id) => {
    return async function (dispatch) {
        try{
        const gameId = await axios.get(`http://localhost:3001/videogames/${id}`);
       
        return dispatch ({
            type: 'GET_BY_ID',
            payload: gameId.data
        })
         } catch(err){
            console.log(err)
        } 
    }
}


export const getByGenres = (id) => {
    return async function (dispatch) {
        try{
        const genres = await axios.get('http://localhost:3001/genres');
        return dispatch ({
            type: 'GET_GENRES',
            payload: genres.data
        })
        } catch(err){
            console.log(err)
        } 
    }
}


export const filterGenres = (genres, status) => {
    return{
        type: 'FILTER_BY_GENRE',
        payload: {genres, status}
    }
}


export const filterGamesByCreated = (value) => {
    return {
        type: 'FILTER_BY_CREATED',
        payload: value 
    }
        
}


export const sortVideogame = (sortOrder) =>{
 return {
     type: 'SORT_VIDEOGAME',
     payload: sortOrder
 }
}

export const postVideogame = (data) =>{
    return async function(dispatch){
        let result = await axios.post('http://localhost:3001/videogames', data);
        console.log(result)
        return dispatch({
            type: 'ADD_VIDEOGAME',
        })
    }
}

export const deleteVideogame = (id) => {
    return async function(dispatch){
        try{
            await axios.delete(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: 'DELETE_VIDEOGAME',
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const updateVideogame = (id, data) => {
    return async function(dispatch){
        try{
            await axios.put(`http://localhost:3001/videogames/${id}`, data);
            return dispatch({
                type: 'UPDATE_VIDEOGAME'
            })
        }catch(err){
            console.log(err);
        }
    }
}

// export const searchVideogame = (name) => {
//     return{
//         type: 'SEARCH_VIDEOGAME',
//         payload: name
//     }
// }







    