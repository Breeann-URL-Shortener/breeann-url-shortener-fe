import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createLink, fetchLinks } from '../services/shortenerAPICalls';
import Form from '../components/form/Form';

const ShortenContainer = (props) => {

  return (
    <div>
      {/* Takes in Form and List to contain */}
      <Form />
    </div>
  );
};

ShortenContainer.propTypes = {

};

export default ShortenContainer;

