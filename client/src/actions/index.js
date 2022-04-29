import axios from 'axios';

//--- connection ---//
export function getVideogames(){
    return async function (dispatch){
        let url = await axios('http://localhost:3000/videogames')
       return dispatch({
        type: 'GET_VIDEOGAMES',
        payload: url.data
    })
   } 
}

    