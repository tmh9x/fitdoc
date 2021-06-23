import React from 'react';
import Header from '../../components/Header/Header';
import WorkoutCardLarge from '../../components/WorkoutCardLarge/WorkoutCardLarge';
import WorkoutCardSmall from '../../components/WorkoutCardSmall/WorkoutCardSmall';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import 'tailwindcss/tailwind.css';

function Home(): JSX.Element {
  return (
    <div className="m-6">
      <header className="pt-2">
        <Header thumbnail="logo.png" isProfileButtonVisible={true} />
      </header>

      <main className="text-secondary">
        <h2 className="pb-6 mt-6">Popular Workouts</h2>
        <div className="flex flex-row flex-shrink-0 gap-4 overflow-x-scroll">
          <div>
            <WorkoutCardLarge thumbnail="pushups.jpeg" name="#" />
          </div>
          <div>
            <WorkoutCardLarge thumbnail="pushups.jpeg" name="#" />
          </div>
          <div>
            <WorkoutCardLarge thumbnail="pushups.jpeg" name="#" />
          </div>
        </div>

        <h2 className="pb-6 mt-6">All Workouts</h2>
        <div className="flex flex-row flex-shrink-0 gap-4 overflow-x-scroll">
          <div>
            <WorkoutCardSmall
              thumbnail="pushups.jpeg"
              name="#"
              category=""
              duration=""
              level=""
            />
          </div>
          <div className="">
            <WorkoutCardSmall
              thumbnail="pushups.jpeg"
              name="#"
              category=""
              duration=""
              level=""
            />
          </div>
          <div className="">
            <WorkoutCardSmall
              thumbnail="pushups.jpeg"
              name="#"
              category=""
              duration=""
              level=""
            />
          </div>
        </div>

        <h2 className="pt-6 pb-6">All Exercises</h2>
        <div className="flex flex-row flex-shrink-0 gap-4 overflow-x-scroll">
          <div>
            <ExerciseCard thumbnail="pushups.jpeg" name="#" category="" />
          </div>
          <div>
            <ExerciseCard thumbnail="pushups.jpeg" name="#" category="" />
          </div>
          <div>
            <ExerciseCard thumbnail="pushups.jpeg" name="#" category="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
