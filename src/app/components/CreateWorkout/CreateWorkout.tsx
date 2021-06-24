import React from 'react';
import 'tailwindcss/tailwind.css';

type CreateWorkoutProps = {
  name: string;
};

function CreateWorkout({ name }: CreateWorkoutProps): JSX.Element {
  return (
    <div className="p-4 rounded-xl bg-secondary w-96">
      <div className="grid grid-cols-2 p-2 mx-auto border rounded-xl bg-secondary w-80">
        <div>{name}</div>
        <div className="place-self-end">
          <input className="w-10 mr-8 border rounded" type="number"></input>
          <input className="w-4 h-4" type="checkbox"></input>
        </div>
      </div>
    </div>
  );
}
export default CreateWorkout;
