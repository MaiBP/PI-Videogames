import React from 'react';
// import Styles from '../pagination/Pagination.module.css'

const Pagination= ({ gamesPerPage, allVideogames, onPage}) => {
 const pages = [];
 for(let i = 1; i <= Math.ceil(allVideogames / gamesPerPage); i++){
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


  //  <nav>
  //    <ul>
  //      {pages?.map(num => (
  //        <li key={num}
  //        >
  //          <button onClick={() => onPage(num)}>
  //          </button>
  //        </li>
  //      ))}
  //    </ul>
  //  </nav>
//  )
 // push the number of pages according to the current page. 

// const handleClick = (e) => {
//   for(let page of pages) {
//     if (page === parseInt(e.target.value)){
//       document.getElementById(page).classList.add(Styles.btn_active); //set styles for buttons
//     } else {
//       document.getElementById(page).classList.remove(Styles.btn_active)
//     }
//   }
//   onPage(e.target.value);
// }

};

export default Pagination;


