import React from 'react';
import WorkoutCardOverview from './WorkoutCardOverview';

export default {
  title: 'Components/WorkoutCardOverview',
  component: WorkoutCardOverview,
};

export const Card = (): JSX.Element => (
  <WorkoutCardOverview
    thumbnail="pushups.jpeg"
    name="Push Ups"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates eligendi accusantium, et deleniti qui vel natus, voluptas quis commodi earum tempora reiciendis illum minus nisi minima, eius sint debitis."
  />
);
