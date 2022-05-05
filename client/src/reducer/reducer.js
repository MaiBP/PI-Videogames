

const initialState = {
    videogames : [], 
    genres: [],
    copyVideogames : [],
    gameDetail: []
}

function rootReducer (state = initialState, action) {
 switch(action.type){
     case 'GET_VIDEOGAMES' : 
     return {
         ...state,
         videogames : action.payload,
         copyVideogames: action.payload,
     }
     case 'GET_BY_NAME' :
         return {
             ...state,
            copyVideogames: action.payload, 
         }
  
    // case 'GET_BY_ID':
    //  return {
    //      ...state,
    //      gameDetail: action.payload,
    //  }

    //  case 'GET_GENRES':
    //   return {
    //     ...state,
    //     genres: action.payload
    //   };

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

     //---FILTERS
     case 'FILTER_BY_NAME':
         const orderGames = 
         action.payload === 'A-Z'
         ? state.copyVideogames.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.copyVideogames.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
       copyVideogames: orderGames,
      };  
      // case 'FILTER_DB_GAMES':
      //     const totalGames = state.videogames;
      //     const filterCreatedGames = 
      //     action.payload === 'DB'
      //     ? totalGames.filter((g)=> g.createdGame === true)
      //     : totalGames.filter((g)=> g.createdGame !== true)
      //     return{
      //         ...state,
      //         copyVideogames:
      //         action.payload === 'All' ? totalGames : filterCreatedGames
      //     }

     default: return state;
 };
}   

export default rootReducer;