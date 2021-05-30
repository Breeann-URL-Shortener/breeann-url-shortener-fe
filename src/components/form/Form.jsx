import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, url, onChange }) {
  return (
  //   A Form that will allow input for the initial url that the user can add
    <form onSubmit={onSubmit}>
      <label htmlFor="url">Your URL</label>
      <input id="url" type="url" value={url} onChange={onChange}/>
      <button>Shorten!</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;

