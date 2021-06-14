import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Card = (): JSX.Element => (
  <Header thumbnail="logo.png" name="fitdoc" />
);
