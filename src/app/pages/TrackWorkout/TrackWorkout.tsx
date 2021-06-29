import React from 'react';
import Header from '../../components/Header/Header';
import SetCard from '../../components/SetCard/SetCard';
import Button from '../../components/Button/Button';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';

function WorkoutOverview(): JSX.Element {
  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} isProfileButtonVisible={false} />

      <main className="flex flex-col mt-6 place-items-center">
        <SetCard name="" sets={[]} />
        <Button children="SAVE WORKOUT" variant="primary" />
      </main>
    </div>
  );
}

export default WorkoutOverview;
