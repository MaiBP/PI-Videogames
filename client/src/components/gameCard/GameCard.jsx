import React from 'react';
import {Link} from 'react-router-dom'

export default function gameCard({id,name,rating, background_image, genres}) {
    return (
        <>
        <Link to={`/home/${id}`}> 
        <h1>{name}</h1>
        
        <h3>{rating}</h3>

        <h3>{genres}</h3>
        <img src={background_image} alt={name}width='200px' height='250px'/>
        </Link>
        </>
    )

}