import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredTitles } from '../../reduxStore/selectors/games';
import polygon from '../../assets/polygon.svg';
import './GamesMain.scss';
import { first } from 'lodash';

function GamesMain({ games }) {
  // const games = useSelector(getFilteredTitles);
  let firstLetters = [];

  games.map((game) => {
    firstLetters.push(game.title[0]);
  });
  console.log(firstLetters);
  let chars = [...new Set(firstLetters.sort())];
  console.log(chars);

  return (
    <>
      <h1 className='text-center'>Games</h1>
      {chars.map((char, index) => (
        <div className='polygon-container'>
          <div key={index} className='polygon'>
            <img className='img-fluid' src={polygon} alt='' />
            <span className='char'>{char}</span>
          </div>
          <div className='row'>
            {games &&
              games.map((game, index) => {
                if (game.title[0] === char) {
                  return (
                    <div key={index}>
                      <div>{game.title}</div>
                    </div>
                  );
                }
              })}
            )
          </div>
        </div>
      ))}

      {/*       {games &&
        games.map((game, index) => {
          return (
            <div key={index} className='container bg-success'>
              <div>{game.title}</div>
            </div>
          );
        })} */}
    </>
  );
}

export default GamesMain;
