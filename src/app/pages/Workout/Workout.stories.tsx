import React from 'react';
import Workout from './Workout';

export default {
  title: 'Page/Workout',
  component: Workout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Workout />;
