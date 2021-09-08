/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import { getCurrentUser, deleteCurrentUser } from '../../actions/profile';
import Spinner from './Spinner';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import ListingDisplay from './ListingDisplay';

function Dashboard({ profile: { profile, loading }, getCurrentUser, deleteCurrentUser }) {
  useEffect(() => {
    getCurrentUser();
  }, []);

  // console.log(<img src={profile.data.data.photo} />);

  return (
    <div>
      {profile && profile.data && profile.data.data ? (
        <div className='dashboard'>
          <Link to='/editprofile'>
            <Icon className='dashboard__edit' size='large' name='pencil' />
          </Link>

          <img className='dashboard__image' src={`/uploads/${profile.data.data.photo || profile.data.user.photo}`} alt='Profile Image' />

          <div className='dashboard__info'>
            <p className='dashboard__name'>
              {profile.data.data.firstName || profile.data.user.firstName} {profile.data.data.lastName || profile.data.user.lastName}
            </p>
            <p className='dashboard__role'>{profile.data.data.role || profile.data.user.role}</p>
            <p className='dashboard__email'>{profile.data.data.email || profile.data.user.email}</p>
          </div>

          <button onClick={() => deleteCurrentUser()}>Delete Account</button>

          <div className='arrow_up' />

          {profile.data.data.listings.map((listing) => {
            return <ListingDisplay key={listing._id} listing={listing} />;
          })}
        </div>
      ) : (
        <div> Your profile will loaded in a while. Thank you!</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentUser, deleteCurrentUser })(Dashboard);
