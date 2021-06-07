/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import AuthForm from '../AuthForm';
import { AuthProvider, useLogin } from '../../../state/AuthContext';

describe('DetailsPage component', () => {
  afterEach(() => cleanup());
  const login = jest.fn();
  it('renders DetailsPage', () => {
    const { asFragment } = render(
      <Router>
        <AuthProvider>
          <AuthForm 
            authFn={login}
            title="Welcome Back! Please Login." 
            action="Login" 
            link="/signup"
            redirectMessage="Not yet a member? Click here to sign up."/>
        </AuthProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
