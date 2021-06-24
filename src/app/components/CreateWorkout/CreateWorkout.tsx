import React from 'react';
import 'tailwindcss/tailwind.css';

type CreateWorkoutProps = {
  name: string;
};

function CreateWorkout({ name }: CreateWorkoutProps): JSX.Element {
  return (
    <div className="py-4 mx-auto rounded-xl bg-secondary w-80">
      <div className="mx-auto mb-4 w-72">
        <input
          type="text"
          placeholder="Workoutname"
          className="h-10 p-4 border w-72 rounded-xl"
        ></input>
      </div>
      <div className="grid grid-cols-2 p-2 mx-auto border rounded-xl bg-secondary w-72">
        <div className="pl-2">{name}</div>
        <div className="place-self-end">
          <input className="w-10 mr-8 border rounded" type="number"></input>
          <input className="w-4 h-4" type="checkbox"></input>
        </div>
      </div>
    </div>
  );
}
export default CreateWorkout;
