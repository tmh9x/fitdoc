import React from 'react';
import CreateWorkout from './CreateWorkout';

export default {
  title: 'Components/CreateWorkout',
  component: CreateWorkout,
};

export const Card = (): JSX.Element => <CreateWorkout name="Push Ups" />;
