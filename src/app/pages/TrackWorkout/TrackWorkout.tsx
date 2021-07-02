import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SetCard from '../../components/SetCard/SetCard';
import Button from '../../components/Button/Button';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import { useHistory, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Workout } from '../../../types';

function WorkoutOverview(): JSX.Element {
  const { name } = useParams<{ name: string }>();
  const [workouts] = useLocalStorage<Workout[]>('workouts', []);
  const [workout, setWorkout] = useState<Workout | null | undefined>(null);
  const history = useHistory();

  useEffect(() => {
    setWorkout(workouts.find((workout) => workout.name === name));
  }, []);

  if (!workout) {
    return <p>Workout not found</p>;
  }

  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col mt-6 place-items-center">
        <div className="font-bold text-secondary">{workout.name}</div>
        {workout.exercises.map((exercise) => (
          <SetCard name={exercise.name} sets={exercise.sets} />
        ))}
        <Button onClick={() => history.push('/')} variant="primary">
          save workout
        </Button>
      </main>
    </div>
  );
}

export default WorkoutOverview;
