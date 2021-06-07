import React from 'react';
import { useLogin } from '../../state/AuthContext';
import AuthForm from './AuthForm';

const Login = () => {
  const login = useLogin();
  return <AuthForm 
    title="Welcome Back! Please Login." 
    action="Login" 
    link="/signup"
    redirectMessage="Not yet a member? Click here to sign up."
    authFn={login} />;
};

export default Login;

