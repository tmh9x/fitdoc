import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';
import pushups from '../../assets/pushups.jpeg';
import { Exercise } from '../../../server/wger';
import useFetch from '../../hooks/useFetch';
import { Link, useHistory } from 'react-router-dom';

function Home(): JSX.Element {
  const exercises = useFetch<Exercise[]>('/api/exercises');
  const history = useHistory();

  if (!exercises) {
    return <div className="text-secondary">Not found!</div>;
  }
  return (
    <div className="m-6 text-secondary">
      <header className="pt-2 bg-primary">
        <Header
          thumbnail={logo}
          isProfileLinkVisible={true}
          isBackButtonVisible={false}
        />
      </header>

      <main>
        <h2 className="pt-6 pb-4">Popular Workouts</h2>
        <div className="flex flex-row flex-shrink-0 gap-4 overflow-x-scroll">
          <Link to="/overview">
            <WorkoutCard thumbnail={pushups} name="Push-Day" />
          </Link>
          <div>
            <WorkoutCard thumbnail={pushups} name="#" />
          </div>
          <div>
            <WorkoutCard thumbnail={pushups} name="#" />
          </div>
        </div>
        <h2 className="pt-6 pb-4">All Exercises</h2>
        <Link to="/overview" className="flex flex-row gap-4 overflow-x-scroll">
          <ExerciseCard thumbnail={pushups} exercises={exercises} />
        </Link>
        <h2 className="pt-6 pb-4">Create your personalized Workout!</h2>
        <div className="flex place-content-center">
          <Button onClick={() => history.push('/create')} variant="primary">
            create workout
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
