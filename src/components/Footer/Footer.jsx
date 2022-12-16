import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className='bg-white'>
        <div className='row text-center'>
          <div className='col-8 d-flex justify-content align-items-center px-5'>
            <div className='col-3 text-decoration-none'>
              <ul className='list-unstyled  d-flex flex-column'>
                <a href='#'>Games </a>
                <a href='#'>Membership</a>
                <a href='#'>Download</a>
              </ul>
            </div>
            <div className='col-2'>
              <ul className='list-unstyled text-decoration-none d-flex flex-column'>
                <a href='#'>Contact Us</a>
                <a href='#'>Blog</a>
              </ul>
            </div>
            <div className='col-2'>
              <ul className='list-unstyled text-decoration-none d-flex flex-column'>
                <a href='#'>FAQs</a>
                <a href='#'>Service Status</a>
              </ul>
            </div>
          </div>
          <div className='col-4 d-flex justify-content align-items-center'>
            <div className='col'>
              <ul className='list-unstyled text-decoration-none d-flex flex-column'>
                <a href='#'>Follow Us!</a>
                <div className='d-flex mx-auto gap-2'>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/9B563812-1778-49C2-A78A-29E6DAE45954.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/DA18F360-65C4-4613-8306-E37C0920498B.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/BD4D567A-FF56-47AC-B573-702388E59EDA.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C4F608BE-8375-439B-AD8A-BB1E992E6463.svg'></img>
                  </a>
                </div>
              </ul>
            </div>
            <div className='col'>
              <p>Site Language</p>
              <div class='dropdown'>
                <a class='btn dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  English
                </a>
                <ul class='dropdown-menu'>
                  <a class='dropdown-item' href='#'>
                    English
                  </a>
                  <a class='dropdown-item' href='#'>
                    Turkish
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='container-fluid d-flex'>
        <div className='row container-md'>
          <div className='col-10 d-flex gap-5'>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>
          <div className='col-2'>
            <p>Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
