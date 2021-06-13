import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../../state/AuthContext';
import buglogo from '../../assets/minuscurl_logo_bug.png';
import './AuthForm.scss';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, authFn, action, link, redirectMessage }) => {
  const error = useAuthError();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    authFn(email, password);
  };

  return (
    <div className="auth-form">
      <section>
        <img src={buglogo} alt="miniscurl bug logo"/>
        <h1>{title}</h1>
      
        {error && <p>{error.message}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              required
              type="email"
              value={email}
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)} />
          </label>
          <input
            required
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)} />

          <button>{action}</button>

          <Link to={link}>
            {redirectMessage}
          </Link>
        </form>
      </section>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  redirectMessage: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
