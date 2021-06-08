import React from 'react';
import PropTypes from 'prop-types';
import ShortUrl from './ShortUrl';
import './ShortUrlList.scss';
// import { useSession } from '../../state/AuthContext';

const ShortUrlList = ({ links }) => {

  console.log(links);

  const linkEl = links.map(link => (
    <li key={link.shortUrl} >
      <ShortUrl {...link} />
    </li>
  ));

  return (
    //   List of all links
    <div className="shorturl-list">
      <p>My Urls:</p>
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

