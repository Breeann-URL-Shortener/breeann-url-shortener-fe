import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ShortUrl.scss';
import buglogo from '../../assets/minuscurl_logo_bug.png';
import { deleteLink } from '../../services/shortenerAPICalls';

function ShortUrl({ shortenedUrl, originalUrl }) {
  
  const [links, setLinks] = useState([]);
  const id = shortenedUrl.slice(32);
  // const stringyId = JSON.stringify(id);
  // console.log(typeof shortenedUrl, 'shortenedUrl');
  console.log(id);

  const handleUrlDelete = async (e) => {
    e.preventDefault();
    await deleteLink(id)
      .then(link => setLinks(links => [...links, link]));
    await window.location.reload();
  };

  function copyToClipboard(text) {
    const placeholder = document.createElement('textarea');
    document.body.appendChild(placeholder);
    placeholder.value = text;
    placeholder.select();
    document.execCommand('copy');
    document.body.removeChild(placeholder);
  }

  const handleCopy = () => {
    copyToClipboard(shortenedUrl);
    console.log('hello');
  };

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
        <form onSubmit={handleUrlDelete}>
          <button>Delete</button>  
        </form>
        <button onClick={handleCopy}>Copy</button>

      </div>
      
    </section>
  );
}

ShortUrl.propTypes = {
  shortenedUrl: PropTypes.string.isRequired, 
  originalUrl: PropTypes.string.isRequired
};

export default ShortUrl;

