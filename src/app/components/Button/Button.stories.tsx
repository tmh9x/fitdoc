import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const primaryButton = (): JSX.Element => (
  <Button
    variant="primary"
    onClick={() => {
      console.log('clicked');
    }}
  >
    START WORKOUT
  </Button>
);

export const secondaryButton = (): JSX.Element => (
  <Button
    variant="secondary"
    onClick={() => {
      console.log('clicked');
    }}
  >
    CONTINUE
  </Button>
);
