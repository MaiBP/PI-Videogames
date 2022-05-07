
import {
filterVideogames,
filterByGenres,
sortVideogame,
} from './utils'


const initialState = {
    videogames : [],
    copyVideogames : [],
    apiGames : [],
    createdGame: [],
    genres: [], 
}

function rootReducer (state = initialState, action) {
 switch(action.type){
     case 'GET_VIDEOGAMES' : 
     return {
         ...state,
         videogames : action.payload,
         copyVideogames: action.payload,
         apiGames : filterVideogames('Existing', action.payload), //search api
         createdGame: filterVideogames('Created', action.payload) //search db
     }

    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      };
    // calls filters from utils folder
    case 'FILTER_BY_GENRE':
      return {
        ...state,
        copyVideogames: filterByGenres(
          action.payload['genres'],
          action.payload['status'] === 'Existing'
          ? state.apiGames
          : action.payload['status'] === 'Created'
          ? state.createdGame
          : state.videogames
        )
      }

     case 'FILTER_BY_CREATED':
      return {
        ...state,
        copyVideogames: filterVideogames(action.payload, state.videogames)
      }

//PRUEBA!
case 'SORT_VIDEOGAME':
      return {
        ...state,
        copyVideogames: sortVideogame(action.payload, state.videogames)
      }

    // case 'SORT_BY_NAME':
    //   return {
    //     ...state,
    //     copyVideogames: sortByName(action.payload)
    //   }

    // case 'SORT_BY_RATING':
    //   return {
    //     ...state,
    //     copyVideogames: sortByRating(action.payload)
    //   }


  
    // case 'GET_BY_ID':
    //  return {
    //      ...state,
    //      gameDetail: action.payload,
    //  }

    

    //  case 'CREATE_GAME':
    //      return {
    //          ...state,
    //      }
    //  case 'DELETE_GAME':
    //      return {
    //          ...state,
    //      }
    //  case 'UPDATE_GAME':
    //      return {
    //          ...state, 
    //      }





     default: return state;
 };
}   

export default rootReducer;