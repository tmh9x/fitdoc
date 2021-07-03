import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCardOverview from '../../components/WorkoutCardOverview/WorkoutCardOverview';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';

function WorkoutOverview(): JSX.Element {
  return (
    <div className="pt-2 pb-4 mx-2">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col pt-6 place-items-center">
        <WorkoutCardOverview name="2 Handed Kettlebell Swing" />
      </main>
    </div>
  );
}

export default WorkoutOverview;
