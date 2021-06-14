import React from 'react';
import WorkoutCardSmall from './WorkoutCardSmall';

export default {
  title: 'Components/WorkoutCardSmall',
  component: WorkoutCardSmall,
};

export const Card = (): JSX.Element => (
  <WorkoutCardSmall
    thumbnail="/pushups.jpeg"
    name="Chest Workout"
    category="Muscle"
    iconTimer="/timer.png"
    duration="15 min."
    iconLevel="/level.png"
    level="level"
  />
);
