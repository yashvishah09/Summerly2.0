import React from 'react';

import { Segment, Form } from 'semantic-ui-react';
import Slider from 'react-slick';

import './ForgetPassword.css';

function ForgetPassword() {
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='forgetPass'>
      <Slider {...settings}>
        <div>
          <Segment style={{ width: '40%', marginLeft: '25%', marginTop: '10%', border: 'none' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span>Welcome to Summerly</span>
            </div>

            <Form>
              <Form.Input label='Enter your registered email address' placeholder='email address' />
              <Form.Button content='submit' />
            </Form>
          </Segment>
        </div>
        <div>
          <Segment style={{ width: '40%', marginLeft: '25%', marginTop: '10%', border: 'none' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span>Welcome to Summerly</span>
            </div>

            <Form>
              <Form.Input label='Enter your verification code that was sent to your email' placeholder='code' />
              <Form.Button content='submit' />
            </Form>
          </Segment>
        </div>
        <div>
          <Segment style={{ width: '40%', marginLeft: '25%', marginTop: '10%', border: 'none' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span>Welcome to Summerly</span>
            </div>
            <Form>
              <Form.Input label='Enter your new password' placeholder='new password' />
              <Form.Input label='Enter your current password' placeholder='current password' />
              <Form.Button content='submit' />
            </Form>
          </Segment>
        </div>
      </Slider>
    </div>
  );
}

export default ForgetPassword;
