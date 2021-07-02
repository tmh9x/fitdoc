import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import type { Exercise } from '../../../server/wger';
import type { Workout, WorkoutExercise } from '../../../types';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';
import CreateWorkoutCard from '../../components/CreateWorkoutCard/CreateWorkoutCard';
import Header from '../../components/Header/Header';
import useFetch from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function CreateWorkout(): JSX.Element {
  const exercises = useFetch<Exercise[]>('/api/exercises');
  const history = useHistory();
  const [workouts, setWorkouts] = useLocalStorage<Workout[]>('workouts', []);
  const [name, setName] = useState<string>('');
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExercise[]>(
    []
  );

  function updateWorkoutExercise(name: string, sets: number, active: boolean) {
    const workoutExercisesCopy = [...workoutExercises];

    if (active) {
      const workoutExercise = workoutExercisesCopy.find(
        (exercise) => exercise.name === name
      );
      if (workoutExercise) {
        workoutExercise.sets = Array(sets).fill({
          repetitions: '',
          weight: '',
        });
      } else {
        const newWorkoutExercise = {
          name,
          sets: Array(sets).fill({ repetitions: '', weight: '' }),
        };
        workoutExercisesCopy.push(newWorkoutExercise);
      }
      setWorkoutExercises(workoutExercisesCopy);
    } else {
      const newWorkoutExercises = workoutExercisesCopy.filter(
        (exercise) => exercise.name !== name
      );
      setWorkoutExercises(newWorkoutExercises);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWorkouts([...workouts, { name: name, exercises: workoutExercises }]);
    history.push(`/track/${name}`);
  }

  if (!exercises) {
    return <div>Not found!</div>;
  }

  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} />
      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <CreateWorkoutCard
            exercises={exercises}
            name={name}
            handleNameChange={setName}
            onWorkoutExerciseChange={updateWorkoutExercise}
          />
        </div>
        <div className="flex place-content-center">
          <Button variant="primary">save</Button>
        </div>
      </form>
    </div>
  );
}
export default CreateWorkout;
