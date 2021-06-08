import React from 'react';
import PropTypes from 'prop-types';
import './ShortUrl.scss';
import buglogo from '../../assets/minuscurl_logo_bug.png';

function ShortUrl({ shortenedUrl, originalUrl }) {
  return (
    
    // individual url links
    <section className="short-url-section">
      <img src={buglogo} alt="bug logo" />
      
      <div className="urls">
        <h1>Your Long URL</h1>
        <p>{originalUrl}</p>

        <h1>Minuscurl</h1>
        <p>{shortenedUrl}</p>
      </div>

      <div className="buttons">
        <button>Copy</button>
        <button>Delete</button>
      </div>
      
    </section>
  );
}

ShortUrl.propTypes = {
  shortenedUrl: PropTypes.string.isRequired, 
  originalUrl: PropTypes.string.isRequired
};

export default ShortUrl;

