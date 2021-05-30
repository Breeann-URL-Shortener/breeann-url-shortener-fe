import React from 'react';
import PropTypes from 'prop-types';
import ShortUrl from './ShortUrl';

const ShortUrlList = ({ links }) => {

  console.log(links);

  const linkEl = links.map(link => (
    <li key={link.shortUrl} >
      <ShortUrl {...link} />
    </li>
  ));

  return (
    //   List of all links
    <ul>
      {linkEl}
    </ul>
  );
};

ShortUrlList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    shortenedUrl: PropTypes.string.isRequired, 
    originalUrl: PropTypes.string.isRequired
  })).isRequired
};

export default ShortUrlList;

