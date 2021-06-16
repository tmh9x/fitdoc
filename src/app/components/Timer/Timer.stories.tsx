import React from 'react';
import Timer from './Timer';

export default {
  title: 'Components/Timer',
  component: Timer,
};

export const WorkoutTimer = (): JSX.Element => (
  <Timer
    onClick={() => {
      console.log('clicked');
    }}
  >
    START
  </Timer>
);
