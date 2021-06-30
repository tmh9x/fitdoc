import React from 'react';
import TrackWorkout from './TrackWorkout';

export default {
  title: 'Page/TrackWorkout',
  component: TrackWorkout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <TrackWorkout />;
