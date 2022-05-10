import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    deleteVideogame,
    getGameId,
} from '../../actions/actions';

// import VideogameCard from '../videogameCard/VideogameCard'
import GameCard from './GameCard'


const GameDetail = () =>  {
// const [image, setImage] = useState(true);
const {id} = useParams();
const dispatch = useDispatch();
const gameDetails = useSelector((state) => state.gameDetail)
const navigate = useNavigate();

useEffect(() => {
    dispatch(getGameId(id));
}, [dispatch, id]);

// const handleImage = (e) =>{
//     setImage((prevState) => !prevState)
// }
const handleDelete = () =>{
    dispatch(deleteVideogame(id));
    navigate('/home')
}

console.log(gameDetails)

return (
    <div> 
        <div onClick={handleDelete}>
            {typeof gameDetails.id === 'string' && (
            <button>
                DELETE
            </button>
            )}
            <NavLink to='./home'>
                <button>BACK HOME</button>
            </NavLink>
            {typeof gameDetails.id === 'string' && (

            <NavLink to={`/updateVideogame/${id}`}>
                <button>UPDATE GAME</button>
            </NavLink>  
            )}
        </div>
        <div>
            <main>
                <div>
                    {gameDetails.name && gameDetails.name.toUpperCase()}
                </div>
                {/* <img
                alt='game'
                onClick={ (e) => handleImage(e)}
                src={ image ? gameDetails.background_image : gameDetails.background_image}/> */}
            </main>
          <div>
        </div>
              <GameCard game={gameDetails}/>
             {/* {gameDetails.map( g => {
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
                } */}
           </div>
       
       

       
{/* 
         <div>
            {typeof gameDetails.id === 'string' && (
            <button>
                DELETE
            </button>
            )}
        </div> */}
        
      {/* <div>
        <div>
             <img src={gameDetails.background_image} width='500px' height='300px' alt={gameDetails.name}/> 
        </div>
          
        <h3>{gameDetails.name}</h3>
        <h3>ID: {gameDetails.id}</h3>
        <h3>⭐Rating : {gameDetails.rating}</h3>
        <h3>📆 Released: {gameDetails.released}</h3>
        <h3>🏹Genres: {gameDetails.genres}</h3>
        <h3>👾Platforms: {gameDetails.platforms}</h3>
        <h3>📖Description:</h3>
        <div style={{ border: '1px solid', padding: '0.5rem'}}>{
        gameDetails.description}
      </div>
        */}
        

        {/* </div>
        {gameDetails.game?.map((e)=>
        <GameCard 
        background_image={e.background_image}
        name={e.name} 
        rating={e.rating} 
        platforms={e.platforms}
        description={e.description}
        key={e.id}
        /> )} */}
      
    </div>
)     

// const dispatch = useDispatch();
// const navigate = useNavigate();
// const gameDetails = useSelector((state) => state.gameDetail)


// useEffect(() => {
//     dispatch(getGameId(id));
// }, [dispatch, id]);


// const handleDelete = () => {
//     dispatch(deleteVideogame(id));
//     navigate('/home');
// }
// const handleUpdate = () => {
//     dispatch(updateVideogame(id))
//     navigate(`/updateVideogame/${id}`)
// }


// return gameDetails.length > 0 ? (

//     <div>
//      <div>
//          <Link to='/home'>
//              <button>
//                  Back Home
//              </button>
//          </Link>
//          <div>
//              {typeof gameDetails[0].id === 'string' && (
//              <button onClick={handleDelete}>
//                  Delete 
//              </button>
//             )}
//          </div>
         
//          <div>
//              {typeof gameDetails[0].id === 'string' && (
//             <button onClick={handleUpdate}> 
//                 Update 
//             </button> 
//          )} 
//          </div> 
//      </div>
//    <div>
//        <h1 className='defaultValue'>{gameDetails[0].name.toUpperCase()} </h1>
//    </div>
//    <img
//    alt='game-img'
//    src={gameDetails[0].background_image ? gameDetails[0].background_image : gameDetails[0].background_image} alt='' width='700px' height='500px'
//    /> 
//    <h3> ⭐Rating </h3>
//    <p> {gameDetails[0].rating}</p>
//    <h3> 📆 Released Date </h3>
//    <p> {gameDetails[0].released}</p>
//    <h3> 👾 Platforms </h3>
//    <div>
//        {gameDetails[0].platforms && gameDetails[0].platforms.join(', ')}
//    </div>
//    <h3> 🏹 Genres </h3>
//    <div>
//        {gameDetails[0].genres.join(', ')}
//    </div>
//    <h3> 📖 Description </h3>
//    <p>
//        {gameDetails[0].description ? gameDetails[0].description : gameDetails[0].description}
//     </p> 
//  </div>
 
//  ) : (
//  <div>
//      <div>
//          <Link to='/home'>
//              <button>
//                  Back Home
//              </button>
//          </Link>
//          <h1>
//              {gameDetails.name}
//          </h1>
//          <div>
//         <img 
//             src={gameDetails.background_image}
//             alt={gameDetails.name}
//             /> 
//         </div>
    
//         <h3> ⭐Rating </h3>
//         <p> {gameDetails.rating}</p>
//         <h3> 📆 Released Date </h3>
//         <p> {gameDetails.released}</p>
//         <h3> 👾 Platforms </h3>
//     <div>
//         {gameDetails.platforms && gameDetails.platforms.join(', ')}
//     </div>
//         <h3> 🏹 Genres </h3>
//     <div>
//        {gameDetails.genres.join(', ')}
//     </div>
//    <h3> 📖 Description </h3>
//    {/* <p dangerouslySetInnerHTML={{ __html: gameDetails.description }}/> */}
   
 
//     </div>
//  </div>

// )
}
export default GameDetail;