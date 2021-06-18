import React from 'react';
import WorkoutOverview from './WorkoutOverview';

export default {
  title: 'Page/WorkoutOverview',
  component: WorkoutOverview,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <WorkoutOverview />;
