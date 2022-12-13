import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../components/Footer/Footer';
import RegisterHeader from '../components/RegisterHeader/RegisterHeader';
import RegisterForm from '../components/RegisterForm/RegisterForm';

function Register() {
  return (
    <>
      <RegisterHeader />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;
