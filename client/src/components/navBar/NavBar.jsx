import React, {useState} from 'react';

import { NavLink } from "react-router-dom";

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
    <nav className='nav'>
      <div className='value'>
        <img src='#' alt='#'/>
       <span>Videogames App</span>
       <form onSubmit={handleSubmit}>
      <input onChange={handleSearchValue}
      value={value}
      type='search'
      placeholder='Search Videogame...'/>
      <button type='submit'>
       SEARCH GAME
      </button>
       </form>
      </div>
      <div>
        <NavLink to='/gameCreateForm'>
          <button>CREATE GAME</button>
        </NavLink>
      </div>
      {/* <div>
        <NavLink to='/about'>
          <button>ABOUT ME</button>
        </NavLink>
      </div> */}
    </nav>
    </>
  );
}
export default NavBar;

