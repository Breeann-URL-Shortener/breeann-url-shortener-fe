const SHORTENER_BACKEND_URL = process.env.SHORTENER_BACKEND_URL;

// create shortened link 
export const createLink = url => {
  return fetch(`${SHORTENER_BACKEND_URL}/api/v1/shorten`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(json => ({
      shortenedUrl: `${SHORTENER_BACKEND_URL}/${json.id}`, 
      originalUrl: json.originalUrl
    }));
};

// fetch links
export const fetchLinks = () => {
  return fetch(`${SHORTENER_BACKEND_URL}/api/v1/shorten`)
    .then(res => res.json())
    .then(res => console.log(res, 'res'))
    .then(json => json.map(link => ({
      shortenedUrl: `${SHORTENER_BACKEND_URL}/${link.id}`, 
      originalUrl: link.originalUrl
    })));
};

// fetch links
export const fetchSavedLinks = userId => {
  console.log(userId, 'userId');
  return fetch(`${SHORTENER_BACKEND_URL}/api/v1/shorten/${userId}`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => res.json())
    // .then(res => console.log(res, 'res'))
    .then(res => res.map(link => ({
      shortenedUrl: `${SHORTENER_BACKEND_URL}/${link.id}`, 
      originalUrl: link.originalUrl
    })));
};

// create shortened link 
export const deleteLink = (id) => {
  return fetch(`${SHORTENER_BACKEND_URL}/api/v1/shorten/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => res.json())
    .then(json => ({
      shortenedUrl: `${SHORTENER_BACKEND_URL}/${json.id}`, 
      originalUrl: json.originalUrl
    }));
};
