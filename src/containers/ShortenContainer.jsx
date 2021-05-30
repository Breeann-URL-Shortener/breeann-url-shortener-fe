import React, { useEffect, useState } from 'react';
import { createLink, fetchLinks } from '../services/shortenerAPICalls';
import Form from '../components/form/Form';
import ShortUrlList from '../components/shortener/ShortUrlList';

const ShortenContainer = () => {
  const [url, setUrl] = useState(''); 
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks()
      .then(links => setLinks(ls => [...ls, ...links]));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    createLink(url)
      .then(link => setLinks(links => [...links, link]));
  };

  const handleChange = e => setUrl(e.target.value);

  console.log(url, 'url');
  console.log(links, 'link');

  return (
    <div>
      {/* Takes in Form and List to contain */}
      <Form url={url} onSubmit={handleSubmit} onChange={handleChange} />
      <ShortUrlList links={links} />
    </div>
  );
};

export default ShortenContainer;
