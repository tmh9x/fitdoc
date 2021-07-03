import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SetCard from '../../components/SetCard/SetCard';
import Button from '../../components/Button/Button';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Workout } from '../../../types';
import MessageCard from '../../components/MessageCard/MessageCard';
import checked from '../../assets/checked.png';

function WorkoutOverview(): JSX.Element {
  const { name } = useParams<{ name: string }>();
  const [workouts] = useLocalStorage<Workout[]>('workouts', []);
  const [workout, setWorkout] = useState<Workout | null | undefined>(null);
  const [showMessageCard, setShowMessageCard] = useState<boolean>(false);

  useEffect(() => {
    setWorkout(workouts.find((workout) => workout.name === name));
  }, []);

  if (!workout) {
    return <p className="text-secondary">Workout not found</p>;
  }

  return (
    <div className="pt-2 pb-4 mx-2">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col place-items-center">
        <div className="pt-4 pb-2 font-bold text-secondary">{workout.name}</div>

        <div className="pb-4">
          {workout.exercises.map((exercise) => (
            <SetCard name={exercise.name} sets={exercise.sets} />
          ))}
        </div>

        <span className="fixed top-40 ">
          {showMessageCard && (
            <MessageCard
              thumbnail={checked}
              setShowMessageCard={setShowMessageCard}
            />
          )}
        </span>
        <Button onClick={() => setShowMessageCard(true)} variant="primary">
          finish
        </Button>
      </main>
    </div>
  );
}

export default WorkoutOverview;
