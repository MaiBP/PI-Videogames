import React, {useState} from 'react';
import Style from '../navBar/NavBar.module.css'

import { BiSearchAlt } from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import { ImPencil } from 'react-icons/im'
import {RiGameLine} from 'react-icons/ri'
import img from '../assets/packmanLogo.gif'

const NavBar = ({onSearch}) =>{
  const [value, setValue] = useState('');
  const handleSearchValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value){
      return alert('You must write a game name!')
    } else{
    onSearch(value)
    setValue('')
    }
  }


 return (
    <>
    <nav className={Style.navbar}>
       <ul>
         
         <li className={Style.logo}><img alt='' className={Style.img} src={img}/></li>
         <li className={Style.title}>VIDEOGAMES EXPLORER</li>
        
         <div className={Style.items}>
           <li>
           
           <NavLink to='/gameCreateForm'className={Style.penLink}>
            <span><ImPencil/>
           Let's Create!
           </span>
           </NavLink>
      
          </li>
          <li>
             <NavLink to='/about' className={Style.aboutMeLink}>
              <span><RiGameLine/>
              About Me</span>
            </NavLink>
          </li>
         </div>
    
          <form className={Style.searchIcon} onSubmit={handleSubmit}>
          <input className={Style.searchInput} onChange={handleSearchValue}
          value={value}
          type='search'
          placeholder='Search Videogame...'/>
         <button type='submit' className={Style.btnSearch}><BiSearchAlt className={Style.biSearch} /></button>
          
         
          </form>

         
       </ul>
        
  
    </nav>
    </>
  );
}
export default NavBar;

