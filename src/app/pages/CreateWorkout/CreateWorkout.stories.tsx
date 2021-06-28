import React from 'react';
import CreateWorkout from './CreateWorkout';

export default {
  title: 'Page/CreateWorkout',
  component: CreateWorkout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <CreateWorkout />;
