import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getAllListings } from '../../actions/listing';
import ListingItem from './ListingItem';

function Listings({ getAllListings, listing: { listings } }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllListings();
  }, []);

  return (
    <div>
      {listings === 'undefined' ? (
        <div>
          {/* <div>
            <input
              type='text'
              placeholder='Search by city'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
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
            ))} */}
        </div>
      ) : (
        <div>
          <div>
            <input
              type='text'
              placeholder='Search by city'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
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
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  listing: state.listing
});

export default connect(mapStateToProps, { getAllListings })(Listings);
