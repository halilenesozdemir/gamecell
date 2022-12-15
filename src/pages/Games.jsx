import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import GamesHero from '../components/GamesHero/GamesHero';
import GamesMain from '../components/GamesMain/GamesMain';
import Header from '../components/Header/Header';
import { gamesAction } from '../reduxStore/games';

function Games() {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.gameReducer);

  useEffect(() => {
    dispatch(gamesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <GamesHero />
      <FilterList />
      <GamesMain games={games} />
    </>
  );
}

export default Games;
