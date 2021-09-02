import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import { Header } from '../components';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Sign in</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input name='email' className='input' type='text' placeholder='Email' onChange={handleInput} />
            <input name='password' className='input' type='password' placeholder='Password' onChange={handleInput} />
            <button type='button' className='button'>
              Sign in
            </button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Remember me
              </label>
              <a href='/'>I forgot my password</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='googleIcon' />
              Sign in with Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitterIcon' />
              Sign in with Twitter
            </div>
          </section>
          <p className='login__container--register'>
            I don&apos;t have an account
            <Link to='/register'>Register</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapStateToProps = {
  loginRequest,
};

export default connect(null, mapStateToProps)(Login);
