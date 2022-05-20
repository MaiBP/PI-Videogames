
import {
filterVideogames,
filterByGenres,
sortVideogame,
// searchVideogame,
} from './utils'


const initialState = {
    videogames : [],
    copyVideogames : [],
    apiGames : [],
    createdGame: [],
    genres: [], 
    gameDetail: []
}

function rootReducer (state = initialState, action) {
 switch(action.type){
     case 'GET_VIDEOGAMES' : 
     return {
         ...state,
         videogames : action.payload,
         copyVideogames: action.payload,
         gameDetail: action.payload,
         apiGames : filterVideogames('Existing', action.payload), //search api
         createdGame: filterVideogames('Created', action.payload) //search db
     }

    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      };

    case 'GET_BY_NAME':
      return {
        ...state,
        copyVideogames: action.payload,
      }
    //    case 'GET_BY_ID':{
    //   return {
    //     ...state,
    //     copyVideogames: action.payload,
    //   }
    // }

      case 'GET_BY_ID':{
      return {
        ...state,
        gameDetail: action.payload,
      }
    }
    
    case 'ADD_VIDEOGAME':{
      return {
        ...state,
      }
    }

    case 'UPDATE_VIDEOGAME': {
      return{
        ...state,
      }
    }
    case 'DELETE_VIDEOGAME': {
      return{
        ...state,
      }
    }

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


      case 'SORT_VIDEOGAME':
      return {
        ...state,
        copyVideogames: sortVideogame(action.payload, state.videogames)
      }

      //testing!!
    //  case 'SEARCH_VIDEOGAME':
    //   return {
    //     ...state,
    //    copyVideogame: searchVideogame(action.payload, state.videogames),
    //   };


     default: return state;
 };
}   

export default rootReducer;