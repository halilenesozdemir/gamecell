import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FilterListItem.scss';

import { removeCheckboxFilter, setCheckboxFilter } from '../../reduxStore/filter';

const FilterListItem = () => {
  const { games } = useSelector((state) => state.gameReducer);
  const allGenres = games.map((game) => game.genres);
  const correctGenres = [...new Set(allGenres.flat(1))];
  const filteredGenres = correctGenres.filter((game) => game != null);
  let sortedGenres = filteredGenres.sort();

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
      <div className=''>
        <div class='accordion ' id='accordionExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'>
                State
              </button>
            </h2>
            <div
              id='collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'>
              <div class='accordion-body'>
                <div className='d-flex flex-column '>
                  <div className='d-flex '>
                    <input type='checkbox' />
                    <label htmlFor>Available</label>
                  </div>
                  <div>
                    <input type='checkbox' />
                    <label htmlFor>Patching</label>
                  </div>
                  <div>
                    <input type='checkbox' />
                    <label htmlFor>Maintenance</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'>
                Genre Filters
              </button>
            </h2>
            <div
              id='collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'>
              <div class='accordion-body'>
                {sortedGenres.map((game, i) => {
                  return (
                    <div className='filter-list' key={i}>
                      <input
                        type='checkbox'
                        name={game}
                        id={game}
                        value={game}
                        onChange={(e) => handleFilterGenre(e)}
                      />
                      <label htmlFor={game}>{game}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterListItem;
