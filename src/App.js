import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NavBar} />
      </Switch>
    </Router>
  );
}

export default App;
