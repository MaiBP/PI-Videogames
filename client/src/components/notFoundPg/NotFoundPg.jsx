import React from 'react';
import page404 from '../assets/img404.gif'

const Page404 = () => {
  return (
    <div className='container'>
      <div className='grid'>
        <div>
          <img className='img404' alt='img404' width='700px' height='500px'> {page404} </img>
        </div>
        <div>
          <div>
            <h1 className='page404'>404 page</h1>
            <h2>GameOver!</h2>
          </div>
          <div className='page404'>
            <p>
              Sorry, page not found.
              Click the button below to go back to the
              homepage.
            </p>
          </div>
          <button
            className='btn-submit'
            onClick={() => {
              window.location.reload();
            }}
          >
             HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;