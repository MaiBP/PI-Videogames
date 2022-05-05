import {useState,useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import Styles from '../home/Home.modules.css'
import VideogameCard from '../videogameCard/VideogameCard'
import Pagination from './pagination/Pagination'

//---Import Actions--//
import { 
    getVideogames,
    getByGenres,
    // getByName,
    

 } from '../../actions/actions.js'


const Home  = () => {
    // const [,/*refresh*/ setRefresh] = useState(false);
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.copyVideogames);
    const genres = useSelector((state)=> state.genres);
   

   //---Pagination ---//

const [currentPage,setCurrentPage] = useState(1)
const [gamesPerPage,setGamesPerPage] = useState(16)
const lastIndex = currentPage * gamesPerPage;
const firstIndex = lastIndex - gamesPerPage;
const currentGames = allVideogames?.slice(firstIndex,lastIndex)

const pagination = (pageNum) =>{
    setCurrentPage(pageNum)
}

 useEffect (()=> {
    dispatch(getVideogames())
    dispatch(getByGenres())
 },[dispatch]);

//--sort by name a-z / z-a--//
//  const sortHandler = (e) =>{
//        dispatch(sortVideogame(e.target.value));
    
//    };



// const handleReload = () => {
//        window.location.reload();
//    };
 
return(
    <>
    <div className="defaultValue">
        <div className="defaultValue">
            <select>
            <option value='Filter order' selected disabled> Filter order </option> 
            <option value='A-Z'> A-Z </option>
            <option value='Z-A'> Z-A </option>
            <option value='topated'>Top Rated</option>
            <option value='lowerrated'>Lower Rated</option>
           </select>
           <select>
            <option value='Filter by' selected disabled> Filter by </option>   
            <option value='all'> All </option>
            <option value='existing'> Existing </option>
            <option value='created'>Created </option>
           </select>
           <select>
               <option value='Filter Genres' selected disabled> Genres </option>
               {genres.map((g)=>{
                   return(
                       <option 
                       key={g.id} 
                       value={g.name}> 
                       {g.name}
                       </option>
                   )
               })}
            </select>
            <div className='Pagination'>
                 <Pagination gamesPerPage={gamesPerPage}
            allVideogames={allVideogames.length} pagination={pagination}/>
            </div>
           
            <div>
                {currentGames.map( g => {
                    return(
                        <VideogameCard 
                        key={g.id}
                        id={g.id}
                        name={g.name}
                        background_image={g.background_image}
                        genres={g.genres}
                        rating={g.rating}/>
                    )
                })}
            </div>


        </div>
    </div>


    </>

 )
}
export default Home;

