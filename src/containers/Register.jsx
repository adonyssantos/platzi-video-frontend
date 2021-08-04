import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';

const Register = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Sign up</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Name'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Email'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button type='submit' className='button'>
            Sign up
          </button>
        </form>
        <Link to='/login'>Sign in</Link>
      </section>
    </section>
  );
};

export default Register;
