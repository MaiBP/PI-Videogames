import React from 'react';
import {NavLink} from 'react-router-dom'
import Styles from '../landingPg/LandingPg.module.css'


const LandingPage =() => {
    return (
        <div className={Styles.bg}>
             <h1 className={Styles.h1}> Game ON! </h1> 
               <NavLink to ='./home'>
               <button className={Styles.button}> Start </button>
               </NavLink>        
        </div>
        

    )
}
export default LandingPage