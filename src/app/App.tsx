import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Workout from './pages/Workout/Workout';
import WorkoutOverview from './pages/WorkoutOverview/WorkoutOverview';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <main>
          <Route path="/Workout">
            <Workout />
          </Route>
          <Route path="/WorkoutOverview">
            <WorkoutOverview />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
