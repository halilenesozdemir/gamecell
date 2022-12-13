import React from 'react';
import './Hero.scss';
import heroSrc from '../../assets/hero.png';

function Hero({ datas }) {
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='true'>
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          {datas.map((data) => {
            return <Card data={data} />;
          })}

          {/* <div className='carousel-item'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-7 flex-column fs-6'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-4'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-4'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div> */}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'>
          <span>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1B87D60A-E56B-4366-95C8-E6D02E1B2CBC.svg'
              alt=''
            />
          </span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'>
          <span>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/292765E5-EC6B-4C0A-B916-4A7242FEBA2E.svg'
              alt=''
            />
          </span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;

function Card({ data }) {
  return (
    <div className='carousel-item active'>
      <img src={heroSrc} className='d-block w-100' alt='' />
      <div className='carousel-contents'>
        <div className='carousel-content col-7 flex-column fs-6'>
          {data.title}
          <p className=''>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
