import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCardOverview from '../../components/WorkoutCardOverview/WorkoutCardOverview';
import 'tailwindcss/tailwind.css';

function WorkoutOverview(): JSX.Element {
  return (
    <div className="pt-2 m-6">
      <Header
        thumbnail="logo.png"
        name="fitdoc"
        isProfileButtonVisible={false}
      />

      <main className="flex flex-col mt-6 place-items-center">
        <WorkoutCardOverview
          thumbnail="pushups.jpeg"
          name="Push Ups"
          description=""
        />
      </main>
    </div>
  );
}

export default WorkoutOverview;
