//-- FILTER LOGIC


export const filterVideogames = (value, array) =>{
    switch(value){ // filters by id if is in db or api
        case 'Existing':
        return array.filter(game => typeof game.id === 'number'); 
        case 'Created': 
        return array.filter(game => typeof game.id === 'string');
        default:
            return array;  
    }
}

export const filterByGenres = (genres, array) => {
    return array.filter(game => game.genres.includes(genres))
}

//Prueba!!
export const sortVideogame = (sortOrder, array) => {
    switch (sortOrder) {
        case 'A-Z':
            return array.sort((a,b) => {
                return a.name.localeCompare(b.name);
            });
        case 'Z-A':
            return array.sort((a,b)=> {
                return b.name.localeCompare(a.name);
            })
        case 'Top Rated':
            return array.sort((a,b) => {
                if(a.rating > b.rating) return 1
                if (a.rating < b.rating) return -1
                else return 0
            })
        case 'Lower Rated':
            return array.sort((a,b) => {
               if(a.rating > b.rating) return -1
               if (a.rating < b.rating) return 1
                else return 0
            })   
        default:
            return array;
    }
}

// return array.sort((a,b) => {
        //     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        // })
        // case 'Top Rated': 
        // return array.sort((a,b) =>{
        //     // if(a.rating > b.rating) return 1;
        //     return a.rating - b.rating
        // })
        // case 'Lower Rated':
        //      return array.sort((a,b) =>{
        //     //  if(a.rating > b.rating) return -1;
        //     return b.rating - a.rating
        // })













// //----REVISAR
// export const sortByName = (payload, array)=>{
//     switch(payload) {
//         case 'A-Z': 
//         return array.sort((a, b) => {
//        if (a.name.toLowerCase() > b.name.toLowerCase()){
//            return 1;
//        }
//        if (a.name.toLowerCase() < b.name.toLowerCase()){
//            return -1;
//        }
//        return 0;
//        case 'Z-A'
//     })
      
     
    
//         default:
//             return sortOrder;
//     }
// }  





