import React from 'react';
import CreateWorkout from './CreateWorkout';

export default {
  title: 'Components/CreateWorkout',
  component: CreateWorkout,
};

export const Default = (): JSX.Element => <CreateWorkout exercises={[]} />;
