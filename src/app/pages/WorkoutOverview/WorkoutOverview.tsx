import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCardOverview from '../../components/WorkoutCardOverview/WorkoutCardOverview';
import 'tailwindcss/tailwind.css';

function WorkoutOverview(): JSX.Element {
  return (
    <div className="m-6 pt-2">
      <Header
        thumbnail="logo.png"
        name="fitdoc"
        isProfileButtonVisible={false}
      />

      <main className="mt-6 flex flex-col place-items-center">
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
