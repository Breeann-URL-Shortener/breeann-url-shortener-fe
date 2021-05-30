import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ShortenContainer from '../../containers/ShortenContainer';

export default function App() {
  // Take in container
  return (
    <Router>
      <Switch>
        <Route path="/" component={ShortenContainer}/>

      </Switch>
    </Router> 
    
  );
}
