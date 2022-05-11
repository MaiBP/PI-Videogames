//-- FILTERS, SORT & SEARCH


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


export const sortVideogame = (sortOrder, array) => {
    switch (sortOrder) {
        case 'A-Z':
            return array.sort((a,b) => {  // sort in place
                return a.name.localeCompare(b.name);  // string method returns a number
            });
        case 'Z-A':
            return array.sort((a,b)=> {
                return b.name.localeCompare(a.name);
            })
        case 'Top Rated':
            return array.sort((a,b) => {
                if(a.rating > b.rating) return -1
                if (b.rating > a.rating) return 1
                else return 0
            })
        case 'Lower Rated':
            return array.sort((a,b) => {
               if(a.rating > b.rating) return 1
               if (b.rating > a.rating) return -1
                else return 0
            })   
        default:
            return array;
    }
};

















     




