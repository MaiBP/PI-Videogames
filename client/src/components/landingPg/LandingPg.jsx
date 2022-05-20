import React from 'react';
import {NavLink} from 'react-router-dom'
import Style from '../landingPg/LandingPg.module.css'


const LandingPage =() => {
    return (
        <div className={Style.container}>
        <div className={Style.bg}>
       
        <h1 className={Style.title}> Game ON!  </h1> 
        <div className={Style.btnAlign}>
           <NavLink to ='./home'>
        <button className={Style.button}> Explore </button>
        </NavLink>  
        </div>
        
       
        </div>      
        </div>
        

    )
}
export default LandingPage