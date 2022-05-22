import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import Style from './GameDetail.module.css'

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
    // console.log(id)
}, [dispatch, id]);


const handleDelete = () =>{
    dispatch(deleteVideogame(id));
    alert('Game deleted successfully')
    // console.log(id)
    navigate('/home')
}

 
console.log(gameDetails)

return (
    <div>
        <div className={Style.btncontainer}>
            {typeof gameDetails.id === 'string' && (
                <button className={Style.backBtn}onClick={handleDelete}> <span className={Style.buttonTop}>DELETE</span></button>
            )}
            <NavLink to='/home'>
                <button className={Style.backBtn}><span className={Style.buttonTop}>BACK HOME</span></button>
            </NavLink>
            {typeof gameDetails.id === 'string' && (
                <NavLink to={`/updateVideogame/${id}`}>
                    <button className={Style.backBtn}><span className={Style.buttonTop}>UPDATE</span></button>
                </NavLink>
            )}
        </div>
    
        <div className={Style.container}>
            <GameCard game={gameDetails}/>
        </div>
    </div>
    
           
)     
}
export default GameDetail;