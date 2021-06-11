import React, { useEffect, useState } from 'react';
import { createLink, fetchSavedLinks } from '../services/shortenerAPICalls';
import Form from '../components/form/Form';
import ShortUrlList from '../components/shortener/ShortUrlList';
import { useSession } from '../state/AuthContext';
import './ShortenContainer.scss';

const ShortenContainer = () => {
  const [url, setUrl] = useState(''); 
  const [links, setLinks] = useState([]);
  
  const user = useSession();
  console.log(user, 'user');
  
  useEffect(() => {
    fetchSavedLinks(user.id)
      .then(links => setLinks(ls => [...ls, ...links]));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    createLink(url, user.id)
      .then(link => setLinks(links => [...links, link]));
  };

  const handleChange = e => setUrl(e.target.value);

  console.log(url, 'url');
  console.log(links, 'link');

  return (
    <div className="shorten-container">
      {/* Takes in Form and List to contain */}
      <Form url={url} onSubmit={handleSubmit} onChange={handleChange} />
      <ShortUrlList links={links} />
    </div>
  );
};

export default ShortenContainer;

