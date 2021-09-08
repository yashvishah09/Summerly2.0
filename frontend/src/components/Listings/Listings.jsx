import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getAllListings } from '../../actions/listing';
import ListingItem from './ListingItem';
import { Fragment } from 'react';

function Listings({ getAllListings, listing: { listings } }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllListings();
  }, [getAllListings]);

  return (
    <Fragment>
      <div>
        <input
          type='text'
          placeholder='Search by city'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      {listings && listings.data && listings.data.data ? (
        <div>
          {listings.data.data
            .filter((val) => {
              if (searchTerm == '') {
                return val;
              } else if (val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}
        </div>
      ) : null}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  listing: state.listing
});

export default connect(mapStateToProps, { getAllListings })(Listings);
