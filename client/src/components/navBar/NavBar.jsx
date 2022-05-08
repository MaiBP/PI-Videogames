import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { NavLink } from "react-router-dom";

const NavBar = ({onSearch}) =>{
 return (
    <>
    <nav className='nav'>
      <div className='value'>
        <img src='#' alt='#'/>
       <span>Videogames App</span>
       <SearchBar onSearch={onSearch}/>
      </div>
       <div>
        <NavLink to='/gameCreateForm'>
          <button>Create Game</button>
        </NavLink>
      </div>
      <div>
        <NavLink to='/about'>
          <button>About me</button>
        </NavLink>
      </div>
    </nav>
    </>
  );
}
export default NavBar;

