import React from 'react';
import './Screens.scss';

function Screens() {
  return (
    <>
      <div className='container bg-black text-white text-center'>
        <p className='fs-5'>On all your screens at home and on the go</p>

        <div className='row row-cols-1 flex  m-1  row-cols-lg-3 flex-lg-row  px-3 py-3 flex-wrap flex-lg-nowrap gap-3 gap-lg-2'>
          <div className='border border-primary py-2  '>
            <img
              className='d-inline-block screen-icon ms-2 me-3 '
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B5E506C1-478B-43E7-A192-A8EDCD2222F7.svg'
              alt=''
            />
            <span>Available on Windows</span>
          </div>

          <div className='border border-primary py-2  '>
            <img
              className='d-inline-block screen-icon ms-2 me-3'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B9F2C037-179B-4C7E-B3B1-D7440F430386.svg'
              alt=''
            />
            <span>Available on Mac</span>
          </div>
          <div className='border border-primary py-2  '>
            <img
              className='d-inline-block screen-icon ms-2 me-3'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/FF527D5C-B6BD-4D1E-81ED-11062B23BF5B.svg'
              alt=''
            />
            <span>Available on Android</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screens;
