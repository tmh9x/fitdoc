import React from 'react';
import 'tailwindcss/tailwind.css';
import { Exercise } from '../../../server/wger';
import pushups from '../../assets/pushups.jpeg';
import useFetch from '../../hooks/useFetch';

type WorkoutCardOverviewProps = {
  name: string;
};

function WorkoutCardOverview({ name }: WorkoutCardOverviewProps): JSX.Element {
  const exercises = useFetch<Exercise[]>('/api/exercises');

  if (!exercises) {
    return <p className="text-secondary">Workout or Exercise not found!</p>;
  }

  return (
    <article className="grid bg-secondary w-80 rounded-xl auto-rows-min">
      <img className="rounded-t-xl" src={pushups} alt="" />
      <h1 className="px-4 pt-6 text-xl font-bold">{name}</h1>
      {exercises.map((exercise) => (
        <div className="px-4 pt-2">{exercise.description}</div>
      ))}
    </article>
  );
}
export default WorkoutCardOverview;
