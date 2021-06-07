import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ShortenContainer from '../../containers/ShortenContainer';
import LandingPage from '../landingpage/LandingPage';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import PrivateRoute from '../auth/PrivateRoute';
import { AuthProvider } from '../../state/AuthContext';
import '../../main.scss';

export default function App() {
  // Take in container
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/shorten" component={ShortenContainer}/>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router> 
    
  );
}
