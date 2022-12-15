import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FilterListItem.scss';
import { getAllGamesGenres } from '../../reduxStore/selectors/games';
import { removeCheckboxFilter, setCheckboxFilter } from '../../reduxStore/filter';

const FilterListItem = () => {
  const gameGenres = useSelector(getAllGamesGenres);
  const dispatch = useDispatch();

  const handleFilterGenre = (e) => {
    const value = e.target.value;
    console.log(value);

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value));
    } else {
      dispatch(removeCheckboxFilter(value));
    }
  };

  return (
    <Fragment>
      {gameGenres.map((game, i) => {
        return (
          <div className='filter-list' key={i}>
            <input type='checkbox' name={game} id={game} value={game} onChange={(e) => handleFilterGenre(e)} />
            <label htmlFor={game}>{game}</label>
          </div>
        );
      })}
    </Fragment>
  );
};

export default FilterListItem;
