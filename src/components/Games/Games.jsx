import React from 'react';
import { gameImage } from '../../mock/GameMock';

import './Games.scss';

function Games({ gameImage }) {
  return (
    <>
      <div className='container-fluid   '>
        <p className='text-center'>Choose the game you want to play</p>
        <div className='row'>
          <div className='col-6 col-sm-3 col-lg-2 mb-3'>
            {gameImage.map((img, index) => {
              {
                console.log(gameImage);
              }
              return <img key={index} src={img} className='game-img img-fluid' alt='...' />;
            })}
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-6 col-sm-3 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div>
          <div className='col-6 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div>

          <div className='col-6 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div>
          <div className='col-6 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div>

          <div className='col-6 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div>
          <div className='col-6 col-lg-2'>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/E88FD84E-22D5-438A-B8C6-775B824E55E7.png'
              className='game-img img-fluid d-none d-md-block'
              alt='...'
            />
          </div> */}
      </div>
    </>
  );
}

export default Games;
