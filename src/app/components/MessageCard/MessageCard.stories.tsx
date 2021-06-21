import React from 'react';
import MessageCard from './MessageCard';

export default {
  title: 'Components/MessageCard',
  component: MessageCard,
};

export const Default = (): JSX.Element => (
  <MessageCard
    thumbnail="checked.png"
    message="Congratulations! You're done for today."
  />
);
