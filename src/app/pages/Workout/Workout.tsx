import React from 'react';
import 'tailwindcss/tailwind.css';
import CreateWorkout from '../../components/CreateWorkout/CreateWorkout';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

function Workout(): JSX.Element {
  return (
    <div className="pt-2 m-6">
      <Header thumbnail="logo.png" />
      <div className="mt-6">
        <CreateWorkout name="" />
      </div>
      <div className="flex mt-4 place-content-center">
        <Button children="SAVE" variant="primary" />
      </div>
    </div>
  );
}
export default Workout;
