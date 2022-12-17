import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import GamesHero from '../components/GamesHero/GamesHero';
import GamesMain from '../components/GamesMain/GamesMain';
import Header from '../components/Header/Header';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import { gamesAction } from '../reduxStore/games';

function Games() {
  const dispatch = useDispatch();
  const [reversed, setReversed] = useState(false);

  useEffect(() => {
    dispatch(gamesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <GamesHero />
      <div className='row bg-black'>
        <div className='col-4'>
          <p className='h3 text-white'>Browse Games</p>
          <FilterList />
        </div>
        <div className='col-8'>
          <SortDropdown setReversed={setReversed} />
          <GamesMain reversed={reversed} />
        </div>
      </div>
    </>
  );
}

export default Games;
