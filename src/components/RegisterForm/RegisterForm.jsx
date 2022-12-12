import React from 'react';
import './RegisterForm.css';
function RegisterForm() {
  return (
    <>
      <div className='container bg-black py-3 px-3 '>
        <h1 className='text-center text-white py-3 px-2'>Register to play with Game+ Lorem Ipsum</h1>
        <div className='form-floating mb-3'>
          <input type='text' className='form-control rounded-0' id='floatingInput' placeholder='Elif Yıldızoğlu' />
          <label htmlFor='floatingInput'>Name Surname</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='text' className='form-control rounded-0' id='floatingUserName' placeholder='elif.yildizoglu' />
          <label htmlFor='floatingUserName'>User Name</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='tel' className='form-control rounded-0' id='floatingUserName' placeholder='Phone Number' />
          <label htmlFor='floatingUserName'>User Name</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='email' className='form-control rounded-0' id='floatingEmail' />
          <label htmlFor='floatingEmail'>Email</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='date' className='form-control rounded-0' id='floatingDate' />
          <label htmlFor='floatingEmail'>Date of Birth</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='password' className='form-control rounded-0 ' id='floatingDate' placeholder='Password ' />
          <label htmlFor='floatingEmail'>Password</label>
        </div>
        <a className='text-muted' href='#'>
          Password rules
        </a>

        <div className='form-check d-flex justify-content-center'>
          <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
          <label className='form-check-label text-muted ' for='flexCheckDefault'>
            <span className='text-decoration-underline'> Sözleşmeyi</span> ve
            <span className='text-decoration-underline'> Gizlilik Şartları </span>’nı okudum ve kabul ediyorum.
          </label>
        </div>
        <div className='form-check d-flex justify-content-center'>
          <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
          <label className='form-check-label text-muted ' for='flexCheckDefault'>
            <span className='text-decoration-underline'> Sözleşmeyi</span> ve
            <span className='text-decoration-underline'> Gizlilik Şartları </span>’nı okudum ve kabul ediyorum.
          </label>
        </div>
        <button className='btn btn-lg d-block mx-auto bg-secondary px-5 mb-3'>SUBMIT</button>
        <div className='text-center text-muted'>
          <p className='m-0'>Daha önceden kayıt olduysan hemen </p>
          <p className='text-decoration-underline'>Oturum aç!</p>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
