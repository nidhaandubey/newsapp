import React, { Component } from 'react';
import SpinnerGif from './Spinner-3.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={SpinnerGif} alt="Loading..." /> 
      </div>
    );
  }
}
