import React from 'react';
import WorkoutCardLarge from './WorkoutCardLarge';

export default {
  title: 'Components/WorkoutCardLarge',
  component: WorkoutCardLarge,
};

export const Card = (): JSX.Element => (
  <WorkoutCardLarge thumbnail="/pushups.jpeg" name="Chest Workout" />
);
