import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateWorkout from './pages/CreateWorkout/CreateWorkout';
import WorkoutOverview from './pages/WorkoutOverview/WorkoutOverview';
import TrackWorkout from './pages/TrackWorkout/TrackWorkout';
import Profile from './pages/Profile/Profile';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <main>
          <Route path="/create">
            <CreateWorkout />
          </Route>
          <Route path="/overview">
            <WorkoutOverview />
          </Route>
          <Route path="/track/:name">
            <TrackWorkout />
          </Route>
          <Route path="/profile">
            <Profile />
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
