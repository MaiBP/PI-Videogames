import React from 'react';
import Styles from '../pagination/Pagination.modules.css'

export default function Pagination({gamesPerPage, allVideogames, pagination}){

    const pgNum = []
    for (let i=1; i<= Math.ceil(allVideogames/gamesPerPage); i++){
        pgNum.push(i)
    }
    return(
         <nav>
      <ul>
        <li className='Pagination'>
          <button className={Styles.btn} onClick={() => pagination(1)}>
            First
          </button>
        </li>
        {pgNum?.map((num) => (
          <li className='Pagination' key={num}>
            <button className={Styles.btn} onClick={() => pagination(num)}>
              {num}
            </button>
          </li>
        ))}
        <li className='Pagination'>
          <button
            className={Styles.btn}
            onClick={() => pagination(pgNum.length)}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
        
    )

}