import React from 'react';
import './Hero.scss';
import heroSrc from '../../assets/hero.png';
import heroMobile from '../../assets/hero-mobile.png';
import Features from '../Features/Features';
import Screens from '../Screens/Screens';
import { BsFillCircleFill } from 'react-icons/bs';

function Hero({ datas }) {
  return (
    <>
      <div id='mainCarousel' className='carousel slide position-relative ' data-bs-ride='true'>
        <div>
          <div className='carousel-inner'>
            {datas.map((data) => {
              return <Card data={data} />;
            })}
          </div>
          <button
            className='carousel-control-prev d-none d-md-block'
            type='button'
            data-bs-target='#mainCarousel'
            data-bs-slide='prev'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg'
                alt=''
              />
            </span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next d-none d-md-block'
            type='button'
            data-bs-target='#mainCarousel'
            data-bs-slide='next'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg'
                alt=''
              />
            </span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        <Features />
        <Screens />
      </div>
    </>
  );
}

export default Hero;

function Card({ data }) {
  return (
    <div className='carousel-item active  '>
      <div className='d-flex flex-column '>
        <picture className='carousel-img' alt=''>
          <source media='(max-width: 576px )' srcset={heroMobile} />
          <img src={heroSrc} alt='' className='img-fluid w-100' />
        </picture>
        <div className='carousel-contents'>
          <div className='carousel-content col-lg-5 col-md-6 d-flex flex-column gap-2  px-3 '>
            <h2 className='h2 '>{data.title}</h2>
            <p className='h6 '>{data.content}</p>
            {data.button}
          </div>
        </div>
      </div>
    </div>
  );
}
