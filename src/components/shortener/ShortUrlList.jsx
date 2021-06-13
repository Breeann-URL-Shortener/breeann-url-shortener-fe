/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import ShortUrl from './ShortUrl';
import './ShortUrlList.scss';
// import { useSession } from '../../state/AuthContext';

const ShortUrlList = ({ links, onClick }) => {

  console.log(links);

  

  const linkEl = links.map((link, i) => (

    <li key={i} >
      <ShortUrl {...link} />
    </li>
  ));

  return (
    //   List of all links
    <div className="shorturl-list">
      <h1>Your recent Minuscurls</h1>
      {/* <p>Here's a list of all of your minuscurls and your original links for your later use.</p> */}
      <ul>
        {linkEl}
      </ul>
    </div>
  );
};

ShortUrlList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    shortenedUrl: PropTypes.string.isRequired, 
    originalUrl: PropTypes.string.isRequired
  })).isRequired
};

export default ShortUrlList;

