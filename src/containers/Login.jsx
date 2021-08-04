import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';

const Login = () => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = event => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Sign in</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
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
            Sign in
          </button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Remember me
            </label>
            <a href='/'>I forgot my password</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} /> Sign in with Google
          </div>
          <div>
            <img src={twitterIcon} /> Sign in with Twitter
          </div>
        </section>
        <p className='login__container--register'>
          I don't have an account <Link to='/register'>Register</Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
