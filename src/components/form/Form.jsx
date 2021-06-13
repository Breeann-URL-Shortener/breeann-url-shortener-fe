/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import graphic from '../../assets/splash_image2.png';
import './Form.scss';

function Form({ onSubmit, url, onChange }) {
  return (
  //   A Form that will allow input for the initial url that the user can add
    <section className="form-section">
      <img src={graphic}/>
      <form onSubmit={onSubmit} >
      
        <h1>Shorten Your URL</h1>
        <p>Click the Shorten button and new long url should appear to the right in a list of all of your minuscurls.</p>
        <input id="url" type="url" value={url} onChange={onChange} placeholder="Your Long URL"/>
        <button onChange={onChange}>Shorten</button>
        
      </form>
    </section>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;

