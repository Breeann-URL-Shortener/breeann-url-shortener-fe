import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  return (
  //   A Form that will allow input for the initial url that the user can add
    <form>
      <label>Your URL</label>
      <input/>
      <button>Shorten!</button>
    </form>
  );
}

Form.propTypes = {

};

export default Form;

