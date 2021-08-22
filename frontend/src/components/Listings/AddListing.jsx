import React, { useState } from 'react';

import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './Listing.css';
import { createListing } from '../../actions/listing';

function AddListing({ createListing, auth }) {
  const [typeOfResidence, setTypeOfResidence] = useState('House');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [utilityIncluded, setUtilityIncluded] = useState('');
  const [roommates, setRoommates] = useState('');
  const [laundry, setLaundry] = useState('');
  const [reservedParking, setReservedParking] = useState('');
  const [isFurnished, setIsFurnished] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [listingDescription, setListingDescription] = useState('');
  const [title, setTitle] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [imageCover, setImageCover] = useState('');
  const [images, setImages] = useState([]);

  const handleImage = (event) => {
    setImageCover(event.target.files[0]);
    console.log(imageCover.name);
  };

  const handleImages = (event) => {
    setImages([...images, ...event.target.files]);
    console.log(images.map((image) => image.name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('typeOfResidence', typeOfResidence);
    data.append('street', street);
    data.append('city', city);
    data.append('zipCode', zipCode);
    data.append('state', state);
    data.append('monthlyRent', monthlyRent);
    data.append('utilityIncluded', utilityIncluded);
    data.append('laundry', laundry);
    data.append('genderPreference', genderPreference);
    data.append('moveInDate', moveInDate);
    data.append('listingDescription', listingDescription);
    data.append('isFurnished', isFurnished);
    data.append('reservedParking', reservedParking);
    data.append('roommates', roommates);
    data.append('title', title);
    data.append('imageCover', imageCover.name);
    data.append('lister', auth.user._id);

    images.forEach((image) => data.append('images', image.name));

    createListing(data);
  };

  return (
    <div className='listing1'>
      <div>
        <h3>Help us collect some basic information about your listing....</h3>

        <div className='listing1_residence'>
          <span>What type of residence is your listing?</span>
          <select name='typeOfResidence' value={typeOfResidence} onChange={(e) => setTypeOfResidence(e.target.value)}>
            <option value='House'>House</option>
            <option value='Appartment'>Appartment</option>
          </select>
        </div>

        <div className='listing1_address'>
          <p>Address:</p>
          <div className='listing1_input'>
            <Form.Input
              name='street'
              value={street}
              className='listing1_street'
              placeholder='Street/Address Line'
              onChange={(e) => setStreet(e.target.value)}
            />
            <Form.Input name='zipCode' value={zipCode} className='listing1_zip' placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)} />
            <Form.Input name='city' value={city} className='listing1_city' placeholder='City' onChange={(e) => setCity(e.target.value)} />
            <Form.Input name='state' value={state} className='listing1_state' placeholder='State' onChange={(e) => setState(e.target.value)} />
          </div>
        </div>

        <div className='listing1_rent'>
          <span>What is your monthly rent?</span>
          <Form.Input
            name='monthlyRent'
            value={monthlyRent}
            className='input_field'
            placeholder='$...'
            onChange={(e) => setMonthlyRent(e.target.value)}
          />
        </div>
        <div className='listing1_utility'>
          <span>Are utilities included in monthly rent?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' name='utilityIncluded' value='Yes' onChange={(e) => setUtilityIncluded(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' name='utilityIncluded' value='No' onChange={(e) => setUtilityIncluded(e.target.value)} />
            </label>
          </div>
        </div>

        <div>
          <span>Is your room your shared?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' name='roommates' value='Yes' onChange={(e) => setRoommates(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' name='roommates' value='No' onChange={(e) => setRoommates(e.target.value)} />
            </label>
          </div>
        </div>
        <div>
          <span>Is your room furnished?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' name='isFurnished' value='Yes' onChange={(e) => setIsFurnished(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' name='isFurnished' value='No' onChange={(e) => setIsFurnished(e.target.value)} />
            </label>
          </div>
        </div>
        <div className='listing4_laundry'>
          <span>Is there in-site laundry?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' name='laundry' value='Yes' onChange={(e) => setLaundry(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' name='laundry' value='No' onChange={(e) => setLaundry(e.target.value)} />
            </label>
          </div>
        </div>
        <div className='listing4_parking'>
          <span>Does your residence have resrved parking?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' name='reservedParking' value='Yes' onChange={(e) => setReservedParking(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' name='reservedParking' value='No' onChange={(e) => setReservedParking(e.target.value)} />
            </label>
          </div>
        </div>

        <div>
          <span>Do you have a sub-letter gender preference?</span>
          <select name='genderPreference' value={genderPreference} onChange={(e) => setGenderPreference(e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='None'>None</option>
          </select>
        </div>

        <div>
          <span>When do you want to rent?</span>
          <Form.Input name='moveInDate' value={moveInDate} placeholder='MM/DD/YYYY' onChange={(e) => setMoveInDate(e.target.value)} />
        </div>
        <div>
          <span>Place description.</span>
          <Form.Input name='listingDescription' value={listingDescription} onChange={(e) => setListingDescription(e.target.value)} />
        </div>

        <div>
          <span>By what title your listing needs to be displayed?</span>
          <Form.Input name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <span>Choose a picture of your listing for your display</span>
          <input type='file' filename='imageCover' onChange={handleImage} />
        </div>

        <div>
          <span>Upload images of your listing</span>
          <input type='file' filename='images' multiple onChange={handleImages} />
        </div>
        <Button type='submit' className='listing1_button' content='Submit' onClick={(e) => handleSubmit(e)} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createListing })(AddListing);
