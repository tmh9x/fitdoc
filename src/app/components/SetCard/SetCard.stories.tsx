import React from 'react';
import SetCard from './SetCard';

export default {
  title: 'Components/SetCard',
  component: SetCard,
};

export const PullUps = (): JSX.Element => (
  <SetCard
    name="Pull Ups"
    sets={[
      { repetitions: 25, weight: 30 },
      { repetitions: 15, weight: 50 },
      { repetitions: 50, weight: 20 },
    ]}
  />
);

export const PushUps = (): JSX.Element => (
  <SetCard
    name="Push Ups"
    sets={[
      { repetitions: 20, weight: 30 },
      { repetitions: 10, weight: 10 },
      { repetitions: 50, weight: 20 },
    ]}
  />
);
