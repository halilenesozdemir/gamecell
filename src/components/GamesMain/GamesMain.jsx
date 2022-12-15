import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredTitles } from '../../reduxStore/selectors/games';
import Button from '../Button/Button';

function GamesMain({ games }) {
  const filteredGames = useSelector(getFilteredTitles);
  return (
    <>
      <h1 className='text-center'>Games</h1>
      {filteredGames &&
        filteredGames.map((game, index) => {
          return (
            <div key={index} className='container bg-success'>
              <div>{game.title}</div>
            </div>
          );
        })}
    </>
  );
}

export default GamesMain;
