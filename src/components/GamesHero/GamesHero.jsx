import React from 'react';
import './GamesHero.scss';

function GamesHero() {
  return (
    <>
      <div className='container-fluid bg-image'>
        <div className='container d-flex flex-column justify-content-center align-items-center h-100 '>
          <div className='row '>
            <div className='col-10 mx-auto text-center mb-2'>
              <p className='text-white fs-1 '>Lorem ipsum dolor sit amet consectetur</p>
              <p className='text-white lead '>
                With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any
                game on any device!
              </p>
              <div className='search '>
                <input type='text' className='py-2' />
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/A66690CB-EE5E-42C1-8E82-87DBAE4A8486.svg'
                  className='search-icon'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamesHero;
