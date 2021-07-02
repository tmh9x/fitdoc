import React from 'react';
import CreateWorkoutCard from './CreateWorkoutCard';

export default {
  title: 'Components/CreateWorkoutCard',
  component: CreateWorkoutCard,
};

export const Default = (): JSX.Element => (
  <CreateWorkoutCard
    exercises={[]}
    onWorkoutExerciseChange={console.log}
    name=""
    handleNameChange={console.log}
  />
);
