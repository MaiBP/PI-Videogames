import React from 'react';
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return (
        <>
         <h1> Game is not over </h1>
        <Link to ='./home'>
            <button> Start </button>
        </Link>
        </>

    )
}