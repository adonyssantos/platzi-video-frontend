import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Sign up</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Sign up</button>
      </form>
      <Link to='/login'>Sign in</Link>
    </section>
  </section>
);

export default Register;
