import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
