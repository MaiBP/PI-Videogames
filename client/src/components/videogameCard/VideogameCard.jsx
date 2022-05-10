import React from "react";
import { Link } from "react-router-dom";

//--HOME CARDS
const VideogameCard = ({ id, name, background_image, genres, rating }) => {

return (
    <div className='card'>
    <Link 
    to={`/home/${id}`}>
      <h2 className='game-name'> {name} </h2> 
     </Link>
    <div>
      <span> ⭐ Rating </span>
      <h3>{rating}</h3>
    </div>
    <div className='Genres'>
      <span> 🏹 Genres </span>
      <div>
        {genres && genres.map((e) => {
          return(
            <div key={e}>{e}</div>
          )
        })}
      </div>
    </div>
    <div className='image-bg'>
   <img src={background_image} alt={name} width='300px' height='200px'/>
    </div>
    {/* <h3>{description}</h3> */}
  </div>

  
)
}
export default VideogameCard;