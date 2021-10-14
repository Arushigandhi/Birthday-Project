import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Gandhi from './pages/Gandhi';
import Peaches from './pages/Peaches';
import Vedu from './pages/Vedu';
import Ss from './pages/Ss';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/Gandhi">
            <Gandhi />
          </Route>
          <Route path="/Vedu">
            <Vedu />
          </Route>
          <Route path="/Ss">
            <Ss />
          </Route>
          <Route path="/">
            <Peaches />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
