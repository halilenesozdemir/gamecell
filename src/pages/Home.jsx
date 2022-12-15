import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/Banner/Banner';
import BottomSlider from '../components/BottomSlider/BottomSlider';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Games from '../components/Games/Games';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Pricing from '../components/Pricing/Pricing';
import Screens from '../components/Screens/Screens';
import datas from '../mock/CardMock';
import gameImage from '../mock/GameMock';

import React from 'react';

function Home() {
  return (
    <>
      <Header />
      <Hero datas={datas} />
      <Features />
      <Screens />
      <Games gameImage={gameImage} />
      <Pricing />
      <BottomSlider />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
