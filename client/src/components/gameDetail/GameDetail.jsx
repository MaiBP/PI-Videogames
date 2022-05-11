import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
    deleteVideogame, // this deletes game created 
    getGameId,
} from '../../actions/actions';


import GameCard from './GameCard'


const GameDetail = () =>  {

const {id} = useParams();
const dispatch = useDispatch();
const gameDetails = useSelector((state) => state.gameDetail)
const navigate = useNavigate();

useEffect(() => {  
    dispatch(getGameId(id));
    console.log(id)
}, [dispatch, id]);


const handleDelete = () =>{
    dispatch(deleteVideogame(id));
    console.log(id)
    navigate('/home')
}

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
                </div>
            </main>
             <GameCard game={gameDetails}/>
        </div>
    </div>
    
           
)     
}
export default GameDetail;