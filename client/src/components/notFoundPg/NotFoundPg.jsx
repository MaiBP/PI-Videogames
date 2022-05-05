import React from 'react';
import GameOver from '../assets/img404.gif'

const Page404 = () => {
  return (
    <div className='container'>
      <div className='grid'>
        <div>
          <img className='img404' src={GameOver} alt='img404'></img>
        </div>
        <div>
          <div>
            <h1 className='page404'>404 page</h1>
            <h2>GameOver!</h2>
          </div>
          <div className='page404'>
            <p>
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