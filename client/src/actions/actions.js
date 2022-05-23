import axios from 'axios';

//--- connection ---//
//--- All games data ---//
export function getVideogames(){
    return async function (dispatch){
        // console.log(dispatch)
    try{
        const url = await axios.get('/videogames')
        // console.log(url.data)
        return dispatch({
        type: 'GET_VIDEOGAMES',
        payload: url.data
        
    })
    }catch(err){
        console.log({msg:`THIS IS THE ERROR ${err}`});
    } 
   } 
}
//-- One game data --//

export const getByName = (name) => {
    return async function (dispatch) {
        try{
            const oneGame = await axios.get(`/videogames?name=${name}`);
            return dispatch ({
            type: 'GET_BY_NAME',
            payload: oneGame.data
            })
        } catch(err){
            return alert('Sorry, there is not a game! try again.')
            // console.log({err: 'There is not game'})
        } 
    }
}

//-- Get BY ID

export const getGameId = (id) => {
    return async function (dispatch) {
        try{
        const gameId = await axios.get(`/videogames/${id}`);
       
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
        const genres = await axios.get('/genres');
        return dispatch ({
            type: 'GET_GENRES',
            payload: genres.data
        })
        } catch(err){
            console.log(err)
        } 
    }
}

//executes passing genres and status from action.payload
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
        let result = await axios.post('/videogames', data);
        console.log(result)
        return dispatch({
            type: 'ADD_VIDEOGAME',
        })
    }
}

export const deleteVideogame = (id) => {
    return async function(dispatch){
        try{
            await axios.delete(`/videogames/${id}`)
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
            await axios.put(`/videogames/${id}`, data);
            return dispatch({
                type: 'UPDATE_VIDEOGAME'
            })
        }catch(err){
            console.log(err);
        }
    }
}


//TESTING
// export const searchVideogame = (name) => {
//   return {
//     type: 'SEARCH_VIDEOGAME',
//     payload: name,
//   };
// };






    