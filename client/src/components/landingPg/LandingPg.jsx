import React from 'react';
import {Link} from 'react-router-dom'
// import Styles from './landing/LandingPage'

export default function LandingPage(){
    return (
        <>
        <div>
             <h1> Game is not over </h1>
        <Link to ='./home'>
            <button> Start </button>
        </Link>
        </div>
        
        </>

    )
}