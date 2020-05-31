import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PlantDetail, Dashboard } from '../pages'
import { DEFAULT_URL, PLANT_DETAIL_URL } from '../constants';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={DEFAULT_URL} exact><Dashboard /></Route>
        <Route path={PLANT_DETAIL_URL}><PlantDetail /></Route>
      </Switch>
    </Router>
  );
}

export default App;
