import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyCartPage from './components/MyCartPage';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={MyCartPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;