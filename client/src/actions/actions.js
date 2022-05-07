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
        const oneGame = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch ({
            type: 'GET_BY_NAME',
            payload: oneGame.data
        })
    }
}

//-- Get BY ID

export const getGameId = (id) => {
    return async function (dispatch) {
        const gameId = await axios.get(`http://localhost:3001/videogames/${id}`);
        return dispatch ({
            type: 'GET_BY_ID',
            payload: gameId.data
        })
    }
}

export const getByGenres = (id) => {
    return async function (dispatch) {
        const genres = await axios.get('http://localhost:3001/genres');
        return dispatch ({
            type: 'GET_GENRES',
            payload: genres.data
        })
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

// SORT PRUEBA!
export const sortVideogame = (sortOrder) =>{
 return {
     type: 'SORT_VIDEOGAME',
     payload: sortOrder
 }
}

////---------SORT by Name
// export const sortByNameOrder= (payload) =>{
//  return {
//      type: 'SORT_BY_NAME',
//      payload,
//  }
// }

// export const sortByRatingOrder = (payload) => {
//     return {
//         type: 'SORT_BY_RATING',
//         payload,
//     }
// }




    