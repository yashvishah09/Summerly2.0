import React from 'react';

import './Header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Fragment } from 'react';

function Header({ auth: { isAuthenticated, loading, role }, logout }) {
  const listerLinks = (
    <nav>
      <ul className='header__auth'>
        <li>
          <h1>
            <Link to='/'>Summerly</Link>
          </h1>
        </li>
        <li>
          <Link to='/aboutus'>About Us</Link>
        </li>
        <li>
          <Link to='/addlisting'>ADD A LISTING</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <a onClick={logout} href='#!'>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );

  const guestLinks = (
    <nav>
      <ul className='header__guest'>
        <li>
          <Link to='/'>Summerly</Link>
        </li>
        <li className='header__aboutus'>
          <Link to='/aboutus'>ABOUT US</Link>
        </li>

        {!isAuthenticated && (
          <li className='header__signin'>
            <Link to='/signin'>SIGN IN</Link>
          </li>
        )}

        <li className='header__listing'>
          <Link to='/listings'>LISTINGS</Link>
        </li>
        {isAuthenticated && (
          <li>
            <a onClick={logout} href='#!'>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );

  return (
    <div className='header'>{!loading && <Fragment>{isAuthenticated ? (role === 'user' ? guestLinks : listerLinks) : guestLinks}</Fragment>}</div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
