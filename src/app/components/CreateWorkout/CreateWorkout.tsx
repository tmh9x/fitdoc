import React from 'react';
import 'tailwindcss/tailwind.css';

type CreateWorkoutProps = {
  name: string;
};

function CreateWorkout({ name }: CreateWorkoutProps): JSX.Element {
  return (
    <div className="grid grid-cols-2 p-2 rounded-xl bg-secondary w-80">
      <div>{name}</div>
      <div className="place-self-end">
        <input className="w-10 mr-4 border rounded" type="number"></input>
        Button
      </div>
    </div>
  );
}
export default CreateWorkout;
