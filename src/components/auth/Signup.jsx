import React from 'react';
import { useSignup } from '../../state/AuthContext';
import AuthForm from './AuthForm';

const Signup = () => {
  const signup = useSignup();
  return <AuthForm 
    title="Sign up for Miniscurl" 
    action="Create Account" 
    link="/login"
    redirectMessage="Already have an account? Click here to Login."
    authFn={signup} />;
    
};

export default Signup;
