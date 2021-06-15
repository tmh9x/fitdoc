import React from 'react';
import ProfileButton from './ProfileButton';

export default {
  title: 'Components/ProfileButton',
  component: ProfileButton,
};

export const Card = (): JSX.Element => (
  <ProfileButton thumbnail="profile.png" />
);
