import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as utils from '../utils';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister, isNotFound } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClasses = classNames('header', {
    isLogin,
    isRegister,
    isNotFound,
  });

  return (
    <div>
      <header className={headerClasses}>
        <Link to='/'>
          <img className='header__img' src={logo} alt='Platzi Video' />
        </Link>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ? (
              <img src={utils.gravatar(user.email)} alt={user.email} />
            ) : (
              <img src={userIcon} alt='User icon' />
            )}
            <p>Profile</p>
          </div>
          <ul>
            {hasUser ? (
              <>
                <li>
                  <a href='/'>{user.name}</a>
                </li>
                <li>
                  <a href='#login' onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
