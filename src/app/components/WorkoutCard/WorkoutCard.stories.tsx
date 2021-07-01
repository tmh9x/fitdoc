import React from 'react';
import WorkoutCard from './WorkoutCard';

export default {
  title: 'Components/WorkoutCard',
  component: WorkoutCard,
};

export const Card = (): JSX.Element => (
  <WorkoutCard thumbnail="/pushups.jpeg" name="Chest Workout" />
);
