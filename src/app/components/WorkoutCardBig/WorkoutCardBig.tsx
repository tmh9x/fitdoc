import React from 'react';
import 'tailwindcss/tailwind.css';

function WorkoutCardBig(): JSX.Element {
  return (
    <div className="w-80 rounded-3xl grid grid-cols-2 grid-rows-2">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3">
        <img className="rounded-3xl" src="/pushups.jpeg" alt="" />
      </div>
      <div className="w-48 bg-transparent row-start-2 row-end-3 col-start-2 col-end-3 place-self-end justify-self-end">
        <p className="bg-white text-center rounded-tl-xl rounded-br-xl pt-1 pl-3 pb-1 pr-3">
          Chest Workouts
        </p>
      </div>
    </div>
  );
}
export default WorkoutCardBig;
