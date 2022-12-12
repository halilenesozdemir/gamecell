import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import RegisterForm from '../components/RegisterForm/RegisterForm';

function Register() {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;
