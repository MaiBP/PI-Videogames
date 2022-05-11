import React from 'react';
// import Styles from '../pagination/Pagination.module.css'


 
const Pagination= ({ gamesPerPage, allVideogames, onPage}) => {
 const pages = [];//-- push the number of pages
                      //gets all games devided by the games per page 
 for(let i = 1; i <= Math.ceil(allVideogames / gamesPerPage); i++){ //288 games / 16 = 18 pages
   pages.push(i)
 }

 return(
<nav>
    {pages?.map((num) => {
      return(
        <button
          id={num}
          value={num}
          key={num}
          onClick={() => onPage(num)}>
          {num}
        </button>
      )
    })}
 </nav>

 )

};

export default Pagination;


