import React from 'react';
import Header from '../../components/Header/Header';
import SetCard from '../../components/SetCard/SetCard';
import 'tailwindcss/tailwind.css';
import Button from '../../components/Button/Button';

function Workout(): JSX.Element {
  return (
    <div className="pt-2 m-6 mb-4">
      <Header thumbnail="logo.png" isProfileButtonVisible={false} />

      <main className="flex flex-col mt-6 place-items-center">
        <div className="m-2">
          <SetCard
            name="Push Ups"
            sets={[
              { repetitions: 8, weight: 30 },
              { repetitions: 8, weight: 30 },
              { repetitions: 8, weight: 30 },
            ]}
          />
        </div>
        <div className="m-2">
          <SetCard
            name="Crunches"
            sets={[
              { repetitions: 15, weight: 0 },
              { repetitions: 15, weight: 0 },
              { repetitions: 15, weight: 0 },
            ]}
          />
        </div>
        <div className="m-2">
          <SetCard
            name="Squats"
            sets={[
              { repetitions: 10, weight: 20 },
              { repetitions: 10, weight: 20 },
              { repetitions: 10, weight: 20 },
            ]}
          />
        </div>
        <div className="mt-2">
          <Button children="SAVE WORKOUT" variant="primary"></Button>
        </div>
      </main>
    </div>
  );
}

export default Workout;
