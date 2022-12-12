import React from 'react';

function Banner() {
  return (
    <>
      <div className='container-fluid p-0'>
        <img
          className=' d-lg-none img-fluid'
          src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/0E4A090D-5867-42E9-A731-99C2927CF1A8.png'
          alt=''
        />
      </div>
      <div className='container '>
        <img
          className='d-none d-lg-block img-fluid'
          src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/08875D78-45E1-4C22-A2B3-868CE0F21323.png'
          alt=''
        />
      </div>
    </>
  );
}
export default Banner;
