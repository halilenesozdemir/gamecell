import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer>
        <div className='row text-center'>
          <div className='col-sm'>
            <ul className='list-unstyled links'>
              <li>
                <a href='#'>Buyer</a>
              </li>
              <li>
                <a href='#'>Supplier</a>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className='list-unstyled links'>
              <li>
                <a href='#'>About us</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
            </ul>
          </div>
          <div className='col-sm'>
            <ul className='list-unstyled links'>
              <li>
                <a href='#'>Terms &amp; Conditions</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <ul className='list-unstyled social'>
              <li>
                <a href='#'>
                  <span className='icon-facebook'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-twitter'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-linkedin'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-medium'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-paper-plane'></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
