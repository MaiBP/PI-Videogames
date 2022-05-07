import React from "react";
// import { Link } from "react-router-dom";

const VideogameCard = ({ id, name, background_image, genres, rating, platforms }) => {

return (
  <div value={id}> 
    <h3>{name}</h3>
    <h3>{rating}</h3>
    <h3>{genres}</h3>
    <h3>{platforms}</h3>
    <img src={background_image} alt='img' width='200px'hight='250px'/>
  </div>
)
}
export default VideogameCard;