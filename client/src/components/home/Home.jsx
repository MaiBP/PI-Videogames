import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import { 
    getVideogames,
    // getGenres,
 } from '../../actions/index.js'

//import my components
import GameCard  from '../gameCard/GameCard'
// import  NavBar from '../navBar/NavBar'
// import SearchBar from '../searchBar/SearchBar'

const Home  = () => {
    const dispatch = useDispatch()
    const allVideogames = useSelector ((state) => state.videogames) // = mapStateToProps
    
    useEffect(() => {
        dispatch(getVideogames());
        // dispatch(getGenres()) 
    }, [dispatch])

//* HANDLERS *//
function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());

}    

return (
<Fragment>


    <Link to= '/videogames'> Create Videogame </Link>
    <h1> Videogames Home Page</h1>
    <button onClick={e=> {handleClick(e)}}>
    Let's create!
    </button>


   <select>
       <option value= 'more'> more </option> 
       <option value= 'less'> less </option>
      
   </select>
   <select>
       <option value='all'>All</option>
       <option value='created'>Created</option>
       <option value='api'>E</option>
   </select>
   
   {/* name,rating, background_image, genres */}

 <section>
     {allVideogames?.map((game) => {
      return (
          <fragment>
             
            <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  background_image={game.background_image}
                  genres={game.genres}
                  rating={game.rating}
                />
            
            </fragment>
            )
 })
}
 </section>

</Fragment>
);
}

export default Home;