import React from 'react';
import Style from '../pagination/Pagination.module.css'


 
const Pagination= ({ gamesPerPage, allVideogames, onPage}) => {
 const pages = [];//-- push the number of pages
                      //gets all games devided by the games per page 
 for(let i = 1; i <= Math.ceil(allVideogames / gamesPerPage); i++){ // 10 pages
   pages.push(i)
 }

 const handleClick = (e) => {
    for (let num of pages) {
      if (num === parseInt(e.target.value)) {
        document.getElementById(num).classList.add(Style.numBtn__active);
      } else {
        document.getElementById(num).classList.remove(Style.numBtn__active);
      }
    }
    onPage(e.target.value);
  };

 return(
   <div>
     {pages?.map((num) =>{
       return(
       <button className={Style.numBtn}
          id={num}
          value={num}
          key={num}
          onClick={handleClick}>
          {num}
        </button>

       )
     })}
   </div>
 )

};

export default Pagination;

