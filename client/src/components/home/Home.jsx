import {useState,useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import Styles from '../home/Home.modules.css'
import VideogameCard from '../videogameCard/VideogameCard'
import Pagination from './pagination/Pagination'

//---Import Actions--//
import { 
    getVideogames,
    getByGenres,
    filterGamesByCreated,
    filterGenres,
    sortVideogame,
   
    
    

 } from '../../actions/actions.js'


const Home  = () => {
    const [,/*refresh*/ setRefresh] = useState(false);
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.copyVideogames);
    const genres = useSelector((state)=> state.genres);
    const [status, setStatus] = useState('All')
   
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

//--FILTER BY STATUS--all, created, existing 
 const handleFilterCreated = (e) =>{
     setStatus(e.target.value)
     dispatch(filterGamesByCreated(e.target.value));
     setCurrentPage(1);
     setRefresh((prevState) => !prevState); // refresh 
   };
//--FILTER BY GENRE (search by genre)
const handleFilterGenre = (e) => {
    dispatch(filterGenres(e.target.value, status));//gets the value and the status
    setCurrentPage(1)
    setRefresh((prevState) => !prevState); // refresh 
}
//---->SORT ORDER

const handleSort= (e) => {
    dispatch(sortVideogame(e.target.value));
    setRefresh((prevState) => !prevState);
}




const handleReloadBtn = () => {
       window.location.reload();
   };
 
return(
    <>
    <div className="defaultValue">
        <div className="defaultValue">
            <select onChange={handleSort}className='defaultValue' name='Genre' >
            <option value='Sortby' selected disabled> Sort by </option> 
            <option value='A-Z'> A-Z </option>
            <option value='Z-A'> Z-A </option>
             </select>
             <select onChange={handleSort}className='defaultValue' name='Genre' >
            <option value='Top Rated'>Top Rated⬆</option>
            <option value='Lower Rated'>Lower Rated⬇</option>
            </select>
           <select  onChange={e => handleFilterCreated(e)}className='defaultValue'>
            <option value='Filterby' selected disabled> Filter by </option>   
            <option value='All'>All</option>
            <option value='Existing'> Existing </option>
            <option value='Created'>Created </option>
           </select>
           <select onChange={handleFilterGenre} className='defaultValue' name='Genres'>
               <option value='Filter by Genres' selected disabled> Genres </option>
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
           <button onClick={handleReloadBtn}>
               {/* <img alt='Reload' src={img}/> */}
           </button>
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

