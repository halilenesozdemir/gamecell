import React from 'react';
import { gameImageDesktop } from '../../mock/GameMock';
import './Games.scss';

function Games({ gameImage, gameImageDesktop }) {
  return (
    <>
      <div className='container-fluid  '>
        <p className='text-center'>Choose the game you want to play</p>
        <div className='row'>
          {gameImage.map((game, index) => {
            return (
              <div key={index} className='col-6 col-sm-4 col-lg-2 mb-3'>
                <img src={game.src} className='img-fluid w-100' alt='...' />
              </div>
            );
          })}
        </div>
        <div className='row  '>
          {gameImageDesktop.map((game, index) => {
            return (
              <div key={index} className='col-6  col-sm-4 col-lg-2 mb-3'>
                <img src={game.src} className=' img-fluid  w-100 d-none d-lg-block' alt='...' />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
