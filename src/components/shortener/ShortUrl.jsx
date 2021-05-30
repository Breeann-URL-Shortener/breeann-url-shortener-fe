import React from 'react';
import PropTypes from 'prop-types';

function ShortUrl({ shortenedUrl, originalUrl }) {
  return (
    // individual url links
    <p>
      {originalUrl}
      
      <a href={shortenedUrl}>
        {shortenedUrl}
      </a>
    </p>
  );
}

ShortUrl.propTypes = {
  shortenedUrl: PropTypes.string.isRequired, 
  originalUrl: PropTypes.string.isRequired
};

export default ShortUrl;

