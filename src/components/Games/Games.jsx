import React from 'react';
import './Games.scss';

function Games({ gameImage }) {
  return (
    <>
      <div className='container-fluid'>
        <p className='text-center'>Choose the game you want to play</p>
        <div className='row'>
          {gameImage.map((game, index) => {
            return (
              <div key={index} className='col-6 col-sm-3 col-lg-2 mb-3'>
                <img src={game.src} className='game-img img-fluid' alt='...' />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
