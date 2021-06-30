import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCardLarge from '../../components/WorkoutCardLarge/WorkoutCardLarge';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';
import pushups from '../../assets/pushups.jpeg';
import { Link } from 'react-router-dom';
import { Exercise } from '../../../server/wger';
import useFetch from '../../hooks/useFetch';

function Home(): JSX.Element {
  const exercises = useFetch<Exercise[]>('/api/exercises');

  if (!exercises) {
    return <div>Not found!</div>;
  }
  return (
    <div className="m-6 text-secondary">
      <header className="pt-2 bg-primary">
        <Header
          thumbnail={logo}
          isProfileButtonVisible={true}
          isBackButtonVisible={false}
        />
      </header>

      <main>
        <h2 className="pb-6 mt-6">Popular Workouts</h2>
        <div className="flex flex-row flex-shrink-0 gap-4 overflow-x-scroll">
          <div>
            <WorkoutCardLarge thumbnail={pushups} name="Push-Day" />
          </div>
          <div>
            <WorkoutCardLarge thumbnail={pushups} name="#" />
          </div>
          <div>
            <WorkoutCardLarge thumbnail={pushups} name="#" />
          </div>
        </div>

        <h2 className="pt-6 pb-6">All Exercises</h2>
        <div className="flex flex-row gap-4 overflow-x-scroll">
          <ExerciseCard thumbnail={pushups} exercises={exercises} />
        </div>

        <h2 className="pt-6">Create your personalized Workout!</h2>
        <div className="flex place-content-center">
          <Link to="./CreateWorkout">
            <Button children="CREATE WORKOUT" variant="primary" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
