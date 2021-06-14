import React from 'react';
import ExerciseCard from './ExerciseCard';

export default {
  title: 'Components/ExerciseCard',
  component: ExerciseCard,
};

export const Card = (): JSX.Element => (
  <ExerciseCard thumbnail="/pushups.jpeg" name="Push Ups" category="muscle" />
);
