import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    deleteVideogame,
    getGameId,
    // updateVideogame,
} from '../../actions/actions';


import GameCard from './GameCard'


const GameDetail = () =>  {
// const [image, setImage] = useState(true);
const {id} = useParams();
const dispatch = useDispatch();
const gameDetails = useSelector((state) => state.gameDetail)
const navigate = useNavigate();

useEffect(() => {
    dispatch(getGameId(id));
    console.log(id)
}, [dispatch, id]);

// const handleImage = (e) =>{
//     setImage((prevState) => !prevState)
// }
const handleDelete = () =>{
    dispatch(deleteVideogame(id));
    console.log(id)
    navigate('/home')
}
// const handleUpdate = () => {
//     dispatch(updateVideogame(id));
//     console.log(id)
//     navigate(`/updateVideogame/${id}`)
// }

// console.log(gameDetails)

return (
    <div>
        <div>
            {typeof gameDetails.id === 'string' && (
                <button onClick={handleDelete}> DELETE</button>
            )}
            <NavLink to='/home'>
                <button>BACK HOME</button>
            </NavLink>
            {typeof gameDetails.id === 'string' && (
                <NavLink to={`/updateVideogame/${id}`}>
                    <button>UPDATE</button>
                </NavLink>
            )}
        </div>
        <div>
            <main>
                <div>
                    {gameDetails.name}
                    {/* <div>
                        <img 
                        alt='videogame'
                        onClick={handleImage}
                        src={ image ? gameDetails.background_image : gameDetails.backround_image}/>
                    </div> */}
                </div>
            </main>
             <GameCard game={gameDetails}/>
        </div>
    </div>
    
           
)     
}
export default GameDetail;