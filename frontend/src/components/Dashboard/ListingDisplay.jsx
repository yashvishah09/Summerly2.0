import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Segment, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';

import { deleteListing } from '../../actions/listing';

function ListingDisplay({ listing, deleteListing }) {
  const handleDeleteListing = (id) => {
    deleteListing(id);
    window.location.reload();
  };
  return (
    <div>
      <Segment className='listing__segment'>
        <img src={`/uploads/${listing.imageCover}`} className='listing__image' />

        <div className='listing__information'>
          <span className='listing__title'>{listing.title}</span>
          <div>
            <span className='listing__city'>{listing.city}</span>|
            <span className='listing__date'>{moment(listing.postedAt).format('MM/DD/YYYY')}</span>
          </div>

          <p className='listing__description'>{listing.listingDescription}</p>
        </div>

        <p className='listing__rent'>${listing.monthlyRent}</p>

        <Link to={`/updatelistings/${listing._id}`}>
          <Icon className='dashboard__edit' size='large' name='pencil' />
        </Link>

        <Icon name='trash' onClick={(e) => handleDeleteListing(listing._id)} />
      </Segment>
    </div>
  );
}

export default connect(null, { deleteListing })(ListingDisplay);
