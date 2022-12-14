import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { sortGenre } from '../../reduxStore/sortGenre';
import { isSort } from '../../reduxStore/isSort';
import { sortChoose } from '../../reduxStore/sortChoose';
import { OutlineButton } from '../../styledComponents/OutlineButton';
import { FilterButton } from '../../styledComponents/FilterButton';

function SortFilterGame() {
  const sort_genre = useSelector((state) => state.sortGenre);
  const is_sort = useSelector((state) => state.isSort);
  const sort_choose = useSelector((state) => state.sortChoose);
  const dispatch = useDispatch();

  const genres = [
    {
      genre: 'Aksiyon',
      id: '28',
    },
    {
      genre: 'Macera',
      id: '12',
    },
    {
      genre: 'Bağımsız',
      id: '35',
    },
    {
      genre: 'Canlandırma',
      id: '10749',
    },
    {
      genre: 'Kahramanın gözünden oynanan ateş etme oyunu',
      id: '18',
    },
    {
      genre: 'Oynaması Ücretsiz',
      id: '80',
    },
  ];

  return (
    <>
      <div className='d-flex flex-column mt-12'>
        <div className='d-flex flex-column align-items-center'>
          <div className='text-secondary'>State</div>
          <div className='shadow-lg'>
            {genres.slice(0, 3).map((item, index) => {
              <FilterButton key={index} onClick={() => dispatch(sortGenre(item.id))}>
                {item.genre}
              </FilterButton>;
            })}
          </div>
          <div className='shadow-lg'>
            {genres.slice(3, 6).map((item, index) => {
              <FilterButton key={index} onClick={() => dispatch(sortGenre(item.id))}>
                {item.genre}
              </FilterButton>;
            })}
          </div>
          <div className='d-flex justify-content-center shadow-lg my-6'>
            <OutlineButton onClick={() => dispatch(isSort(true))}>SEARCH</OutlineButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortFilterGame;
