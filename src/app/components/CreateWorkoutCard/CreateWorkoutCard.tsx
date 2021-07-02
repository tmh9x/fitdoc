import React from 'react';
import 'tailwindcss/tailwind.css';
import { Exercise } from '../../../server/wger';
import WorkoutExercise from '../WorkoutExercise/WorkoutExercise';

type CreateWorkoutCardProps = {
  exercises: Exercise[];
  name: string;
  handleNameChange: (name: string) => void;
  onWorkoutExerciseChange: (
    name: string,
    sets: number,
    active: boolean
  ) => void;
};

function CreateWorkoutCard({
  exercises,
  onWorkoutExerciseChange,
  name,
  handleNameChange,
}: CreateWorkoutCardProps): JSX.Element {
  return (
    <div className="py-4 mx-auto rounded-xl bg-secondary w-80">
      <div className="pb-4 mx-auto w-72">
        <input
          type="text"
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          placeholder="Workoutname"
          className="h-10 p-4 border w-72 rounded-xl"
        />
      </div>
      {exercises &&
        exercises.map((exercise) => (
          <WorkoutExercise
            key={exercise.id}
            name={exercise.name}
            onChange={onWorkoutExerciseChange}
          />
        ))}
    </div>
  );
}
export default CreateWorkoutCard;
