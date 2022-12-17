import React from 'react';
import { useSelector } from 'react-redux';
import polygon from '../../assets/polygon.svg';
import './GamesMain.scss';

function GamesMain() {
  const title = useSelector((state) => state.filters.title);
  const genreFilter = useSelector((state) => state.filters.genre);

  const { games } = useSelector((state) => state.gameReducer);

  const filteredGames = games.filter((game) => {
    const isGenreOK = genreFilter.length === 0 ? true : game.genres.some((genre) => genreFilter.includes(genre));
    const isTitleOK = game.title.toLowerCase().includes(title.toLowerCase());
    return isGenreOK && isTitleOK;
  });

  let firstLetters = [];

  filteredGames.map((game) => {
    firstLetters.push(game.title[0]);
  });
  let chars = [...new Set(firstLetters.sort())];
  console.log(chars);

  return (
    <>
      {chars.map((char, index) => (
        <div className='polygon-container'>
          <div key={index} className='polygon'>
            <img className='img-fluid' src={polygon} alt='' />
            <span className='char'>{char}</span>
          </div>
          <div className='row'>
            {filteredGames &&
              filteredGames.map((game, index) => {
                if (game.title[0] === char) {
                  return (
                    <div key={index}>
                      <div>{game.title}</div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      ))}
    </>
  );
}

export default GamesMain;
