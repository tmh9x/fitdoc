import React from 'react';
import WorkoutCardOverview from './WorkoutCardOverview';

export default {
  title: 'Components/WorkoutCardOverview',
  component: WorkoutCardOverview,
};

export const Card = (): JSX.Element => <WorkoutCardOverview name="Push Ups" />;
