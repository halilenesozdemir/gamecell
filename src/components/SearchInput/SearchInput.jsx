import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter } from '../../reduxStore/filter';
import { getSearchBoxInput } from '../../reduxStore/selectors/filters';
import './SearchInput.scss';

function SearchInput() {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();

  const searchGame = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  };
  return (
    <>
      <div className='search'>
        <input
          type='text'
          className='py-2'
          value={inputValue || ''}
          onChange={(e) => searchGame(e)}
          placeholder='Search...'
          alt=''
        />
        <img
          src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/A66690CB-EE5E-42C1-8E82-87DBAE4A8486.svg'
          className='search-icon'
        />
      </div>
    </>
  );
}

export default SearchInput;
