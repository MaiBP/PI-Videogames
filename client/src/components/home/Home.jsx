import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Style from '../home/Home.module.css'
import NavBar from '../navBar/NavBar';
import VideogameCard from '../videogameCard/VideogameCard'
import Pagination from './pagination/Pagination'

//---Import Actions--//
import { 
    getVideogames,
    getByGenres,
    filterGamesByCreated,
    filterGenres,
    sortVideogame,
    getByName,
    // searchVideogame,//testing
   
 } from '../../actions/actions.js'



const Home  = () => {
    const [,/*refresh*/ setRefresh] = useState(false);
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.copyVideogames);
    const genres = useSelector((state)=> state.genres);
    const [status, setStatus] = useState('All')
    const [loader, setLoader] = useState(true)
    
    //---Pagination ---//
    const [currentPage,setCurrentPage] = useState(1) // set page to 1
    const [gamesPerPage,setGamesPerPage] = useState(15) // shows 15 games
    const lastIndex = currentPage * gamesPerPage; // 15 
    const firstIndex = lastIndex - gamesPerPage;  // 0   
    const currentGames = allVideogames?.slice(firstIndex,lastIndex) //takes a part of the array

    const pagination = (pageNum) =>{
    setCurrentPage(pageNum) //set the page
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
    // dispatch(searchVideogame(value))test
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
        <div>
            <div className={Style.selectContainer}>
        <div className={Style.box}>
            <select onChange={handleSort}
            name='Genre'>
                <option value='Sortby'selected disabled> SORT ORDER </option> 
                <option value='A-Z'> A-Z </option>
                <option value='Z-A'> Z-A </option>
            </select>
            <select  onChange={handleSort} 
            >
                <option value='Rating'selected disabled> RATING </option> 
                <option value='Top Rated'>MAX⬆</option>
                <option value='Lower Rated'>LOW⬇</option>
            </select>
           <select onChange={e => handleFilterCreated(e)}
           >
            <option value='Filterby' selected disabled> FILTER </option>   
            <option value='All'>All</option>
            <option value='Existing'> Existing </option>
            <option value='Created'>Created </option>
           </select>
        <select  onChange={handleFilterGenre} 
            name='Genres'>
               <option value='Filter by Genres' selected disabled> GENRES</option>
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
        </div>
    </div>  
    <div className={Style.paginationBox}>
            <Pagination className='pagination' gamesPerPage={gamesPerPage}
            allVideogames={allVideogames.length} 
            onPage={pagination}/>
    </div>
          <div className={Style.reloadBtnContainer}>
        <button data-text='Reload' className={Style.reloadBtn} onClick={handleReloadBtn}>
        <span className='actualText'>&nbsp;reload&nbsp;</span>
        <span className={Style.hoverText} aria-hidden='true'>&nbsp;reload&nbsp;</span>   
        </button>
        </div>  
            <section className={Style.contentWrapper}>
                {currentGames.length > 0 && !loader ?(currentGames.map((g) => {
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
                ) : !currentGames && loader ?(
              
                    <h1>loader pasar abajo si no funciona!!</h1>
                 
                ) : (
                    <div className={Style.loaderAlign}>
                        <div className={Style.loader}>
                            <div className={Style.face}>
                                <div className={Style.circle}></div> 
                            </div>
                            <div className={Style.face}>
                                <div className={Style.circle}></div>
                            </div>
                        </div>
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

