import React, { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import { getAListing, updateListing } from '../../actions/listing';
import { Icon } from 'semantic-ui-react';

function EditListing({ getAListing, listing: { listing, loading }, match, updateListing, history }) {
  const [typeOfResidence, setTypeOfResidence] = useState('');
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
  const [imageCover, setImageCover] = useState({
    image: undefined,
    previewImage: undefined
  });
  const [images, setImages] = useState({
    imageList: [],
    previewImage: []
  });

  console.log(listing);

  useEffect(() => {
    getAListing(match.params.id);

    setTypeOfResidence(loading || !listing.data.data.typeOfResidence ? '' : listing.data.data.typeOfResidence);
    setState(loading || !listing.data.data.state ? '' : listing.data.data.state);
    setCity(loading || !listing.data.data.city ? '' : listing.data.data.city);
    setMonthlyRent(loading || !listing.data.data.monthlyRent ? '' : listing.data.data.monthlyRent);
    setZipCode(loading || !listing.data.data.zipCode ? '' : listing.data.data.zipCode);
    setStreet(loading || !listing.data.data.street ? '' : listing.data.data.street);
    setUtilityIncluded(loading || !listing.data.data.utilityIncluded ? '' : listing.data.data.utilityIncluded);
    setRoommates(loading || !listing.data.data.roommates ? '' : listing.data.data.roommates);
    setLaundry(loading || !listing.data.data.laundry ? '' : listing.data.data.laundry);
    setReservedParking(loading || !listing.data.data.reservedParking ? '' : listing.data.data.reservedParking);
    setIsFurnished(loading || !listing.data.data.isFurnished ? '' : listing.data.data.isFurnished);
    setMoveInDate(loading || !listing.data.data.monthlyRent ? '' : listing.data.data.monthlyRent);
    setListingDescription(loading || !listing.data.data.listingDescription ? '' : listing.data.data.listingDescription);
    setTitle(loading || !listing.data.data.title ? '' : listing.data.data.title);
    setGenderPreference(loading || !listing.data.data.genderPreference ? '' : listing.data.data.genderPreference);
    setImages(loading || !listing.data.data.images ? '' : listing.data.data.images);
    setImageCover({ image: loading || !listing.data.data.imageCover ? '' : listing.data.data.imageCover });
  }, [getAListing, match.params.id]);

  const handleImage = (event) => {
    setImageCover({ image: event.target.files[0], previewImage: URL.createObjectURL(event.target.files[0]) });
  };

  const handleImages = (event) => {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }
    setImages({
      imageList: [...event.target.files],

      previewImage: images
    });
  };

  console.log(match.params.id);

  const clearImage = () => {
    setImageCover({ image: undefined, previewImage: undefined });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('typeOfResidence', typeOfResidence);
    formData.append('street', street);
    formData.append('city', city);
    formData.append('zipCode', zipCode);
    formData.append('state', state);
    formData.append('monthlyRent', monthlyRent);
    formData.append('utilityIncluded', utilityIncluded);
    formData.append('laundry', laundry);
    formData.append('genderPreference', genderPreference);
    formData.append('moveInDate', moveInDate);
    formData.append('listingDescription', listingDescription);
    formData.append('isFurnished', isFurnished);
    formData.append('reservedParking', reservedParking);
    formData.append('roommates', roommates);
    formData.append('title', title);
    formData.append('imageCover', imageCover.image.name);

    images.imageList.forEach((image) => formData.append('images', image.name));

    updateListing(formData, match.params.id, history);
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
              <input
                type='radio'
                checked={utilityIncluded === 'Yes'}
                name='utilityIncluded'
                value='Yes'
                onChange={(e) => setUtilityIncluded(e.target.value)}
              />
            </label>
            <label>
              {' '}
              No
              <input
                type='radio'
                checked={utilityIncluded === 'No'}
                name='utilityIncluded'
                value='No'
                onChange={(e) => setUtilityIncluded(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div>
          <span>Is your room your shared?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' checked={roommates === 'Yes'} name='roommates' value='Yes' onChange={(e) => setRoommates(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' checked={roommates === 'No'} name='roommates' value='No' onChange={(e) => setRoommates(e.target.value)} />
            </label>
          </div>
        </div>
        <div>
          <span>Is your room furnished?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' checked={isFurnished === 'Yes'} name='isFurnished' value='Yes' onChange={(e) => setIsFurnished(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' checked={isFurnished === 'No'} name='isFurnished' value='No' onChange={(e) => setIsFurnished(e.target.value)} />
            </label>
          </div>
        </div>
        <div className='listing4_laundry'>
          <span>Is there in-site laundry?</span>
          <div>
            <label>
              {' '}
              Yes
              <input type='radio' checked={laundry === 'Yes'} name='laundry' value='Yes' onChange={(e) => setLaundry(e.target.value)} />
            </label>
            <label>
              {' '}
              No
              <input type='radio' checked={laundry === 'No'} name='laundry' value='No' onChange={(e) => setLaundry(e.target.value)} />
            </label>
          </div>
        </div>
        <div className='listing4_parking'>
          <span>Does your residence have resrved parking?</span>
          <div>
            <label>
              {' '}
              Yes
              <input
                type='radio'
                checked={reservedParking === 'Yes'}
                name='reservedParking'
                value='Yes'
                onChange={(e) => setReservedParking(e.target.value)}
              />
            </label>
            <label>
              {' '}
              No
              <input
                type='radio'
                checked={reservedParking === 'No'}
                name='reservedParking'
                value='No'
                onChange={(e) => setReservedParking(e.target.value)}
              />
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
          <input type='file' style={{ color: 'transparent', width: '6rem' }} filename='imageCover' onChange={(e) => handleImage(e)} />
          {imageCover.previewImage && (
            <div>
              <img src={imageCover.previewImage} />
              <Icon name='close' onClick={clearImage} />
            </div>
          )}
        </div>

        <div>
          <span>Upload images of your listing</span>
          <input type='file' filename='images' style={{ color: 'transparent' }} multiple onChange={(e) => handleImages(e)} />
          <span>{images.imageList && images.imageList.map((image) => <span>{image.name}</span>)}</span>
          {images.previewImage &&
            images.previewImage.map((image) => (
              <div>
                <img src={image} />
                <Icon name='close' />
              </div>
            ))}
        </div>
        <Button type='submit' className='listing1_button' content='Update' onClick={(e) => handleSubmit(e)} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listing: state.listing
});

export default connect(mapStateToProps, { getAListing, updateListing })(withRouter(EditListing));
