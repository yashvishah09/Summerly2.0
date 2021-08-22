import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './ListingItem.css';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

function ListingItem({ listing }) {
  // const [state, setState] = useState();

  // const handleClick = (event) => {
  //   event.preventDefault();

  //   setState(window.click(localStorage.setItem('id', JSON.stringify(listing._id))));
  // };

  return (
    <div className='listing'>
      <Link to={`/listings/${listing._id}`}>
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
        </Segment>
      </Link>
    </div>
  );
}

export default ListingItem;
