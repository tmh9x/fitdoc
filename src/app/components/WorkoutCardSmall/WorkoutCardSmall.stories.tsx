import React from 'react';
import WorkoutCardSmall from './WorkoutCardSmall';

export default {
  title: 'Components/WorkoutCardSmall',
  component: WorkoutCardSmall,
};

export const Card = (): JSX.Element => (
  <WorkoutCardSmall
    thumbnail="pushups.jpeg"
    name="Chest Workout"
    category="Muscle"
    duration="15 min."
    level="level"
  />
);
