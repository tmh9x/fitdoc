import React from 'react';
import 'tailwindcss/tailwind.css';
import { Exercise } from '../../../server/wger';

type CreateWorkoutCardProps = {
  exercises: Exercise[];
};

function CreateWorkoutCard({ exercises }: CreateWorkoutCardProps): JSX.Element {
  return (
    <div className="py-4 mx-auto rounded-xl bg-secondary w-80">
      <div className="mx-auto mb-4 w-72">
        <input
          type="text"
          placeholder="Workoutname"
          className="h-10 p-4 border w-72 rounded-xl"
        ></input>
      </div>
      {exercises &&
        exercises.map((exercise) => (
          <div className="grid grid-cols-3 p-2 mx-auto mb-2 border last:mb-0 rounded-xl bg-secondary w-72">
            <div className="col-start-1 col-end-3 pl-2 text-xs">
              {exercise.name}
            </div>
            <div className="col-start-3 place-self-end">
              <input className="w-10 mr-4 border rounded" type="number"></input>
              <input className="w-4 h-4" type="checkbox"></input>
            </div>
          </div>
        ))}
    </div>
  );
}
export default CreateWorkoutCard;
