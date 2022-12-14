import React from 'react';
import GamesHero from '../components/GamesHero/GamesHero';
import Header from '../components/Header/Header';
import SortFilterGame from '../components/SortFilterGame/SortFilterGame';

function Games() {
  return (
    <>
      <Header />
      <GamesHero />
      <SortFilterGame />
    </>
  );
}

export default Games;
