import React from 'react';
import Style from './NotFoundPg.module.css'
import {NavLink} from 'react-router-dom'


const NotFoundPg = () => {
  return(
    <div className={Style.container}>
      <div className={Style.bg}>
        <div className={Style.btnAlign}>
        <NavLink to='/home'>
         <button className={Style.button}>Back Home</button>
        </NavLink> 
        </div>
      </div>
    </div>



  )
}
export default NotFoundPg;





// const Page404 = () => {
//   return (
//     <div className={Style.container}>
//       <div className='grid'>
//         <div>
//           <img className='img404' alt='img404' width='700px' height='500px'> {page404} </img>
//         </div>
//         <div>
//           <div>
//             <h1 className='page404'>404 page</h1>
//             <h2>GameOver!</h2>
//           </div>
//           <div className='page404'>
//             <p>
//               Sorry, page not found.
//               Click the button below to go back to the
//               homepage.
//             </p>
//           </div>
//           <button
//             className='btn-submit'
//             onClick={() => {
//               window.location.reload();
//             }}
//           >
//              HOME
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page404;