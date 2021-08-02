import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Sign in</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Sign in</button>
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
        I don't have an account <a href='/register'>Register</a>
      </p>
    </section>
  </section>
);

export default Login;
