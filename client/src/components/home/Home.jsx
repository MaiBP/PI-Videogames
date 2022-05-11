import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Styles from '../home/Home.module.css'
import NavBar from '../navBar/NavBar';
import VideogameCard from '../videogameCard/VideogameCard'
import Pagination from './pagination/Pagination'
import Loading from '../assets/DonkeyKongLoader.gif'
//---Import Actions--//
import { 
    getVideogames,
    getByGenres,
    filterGamesByCreated,
    filterGenres,
    sortVideogame,
    getByName,
   
 } from '../../actions/actions.js'



const Home  = () => {
    const [,/*refresh*/ setRefresh] = useState(false);
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.copyVideogames);
    const genres = useSelector((state)=> state.genres);
    const [status, setStatus] = useState('All')
   
    
    //---Pagination ---//
    const [currentPage,setCurrentPage] = useState(1) // set page to 1
    const [gamesPerPage,setGamesPerPage] = useState(16) // shows 16 games
    const lastIndex = currentPage * gamesPerPage;  
    const firstIndex = lastIndex - gamesPerPage;     
    const currentGames = allVideogames?.slice(firstIndex,lastIndex) 

    
    const [loader, setLoader] = useState(true)

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

const handleSearch= (value) => {
    dispatch(getByName(value))
    setCurrentPage(1)
}

const handleReloadBtn = () => {
       window.location.reload();
   };

 if (currentPage && loader) {
     setLoader(false)
 }
return(
    <>
      <NavBar onSearch={handleSearch}/>
    <main>
    <div>
        <div >
            <select onChange={handleSort}
            name='Genre'>
            <option value='Sortby'selected disabled> Sort Order </option> 
            <option value='A-Z'> A-Z </option>
            <option value='Z-A'> Z-A </option>
            </select>
            <select onChange={handleSort} 
            >
            <option value='Rating'selected disabled> Rating </option> 
            <option value='Top Rated'>Top⬆</option>
            <option value='Lower Rated'>Lower⬇</option>
            </select>
           <select  onChange={e => handleFilterCreated(e)}
           >
            <option value='Filterby' selected disabled> Filter by </option>   
            <option value='All'>All</option>
            <option value='Existing'> Existing </option>
            <option value='Created'>Created </option>
           </select>
           <select onChange={handleFilterGenre} 
            name='Genres'>
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
            
            <div 
            >
            <Pagination gamesPerPage={gamesPerPage}
            allVideogames={allVideogames.length} 
            onPage={pagination}/>
            </div>
            
            <button onClick={handleReloadBtn}
           >
               Reload
               {/* <img alt='Reload' src={img}/> */}
           </button>
            <section >
                {currentGames.length > 0 && !loader ?(currentGames.map( g => {
                    return(
                        <VideogameCard 
                        key={g.id}
                        id={g.id}
                        name={g.name}
                        background_image={g.background_image}
                        genres={g.genres}
                        rating={g.rating}
                        />
                    )
                })
                ) : !currentGames && loader ? (
                    <img alt='loader'
                     src={Loading}/>
                   
                ) : (
                    <div>
                        <div className={Styles.spinner}>
                            <span>L</span>
                            <span>O</span>
                            <span>A</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                     </div>
                       <img alt='loader' src={Loading} width='100%' hight='auto'/>
                    </div>
                )}
            </section>
        </div>

    </div>
    </main>
    </>

 )
}
export default Home;

