import React from 'react';
import 'tailwindcss/tailwind.css';
import { Exercise } from '../../../server/wger';

type ExerciseCardProps = {
  thumbnail: string;
  exercises: Exercise[];
};

function ExerciseCard({
  thumbnail,
  exercises,
}: ExerciseCardProps): JSX.Element {
  return (
    <>
      {exercises &&
        exercises.map((exercise) => (
          <article className="grid flex-shrink-0 w-32 grid-flow-row text-sm grid-rows-exerciseCard text-primary bg-secondary h-44 rounded-xl">
            <div>
              <img
                className="object-cover h-24 w-44 rounded-t-xl"
                src={thumbnail}
              />
            </div>
            <h3 className="pl-1 text-xs font-bold">{exercise.name}</h3>
            <div className="pl-1">{exercise.category}</div>
          </article>
        ))}
    </>
  );
}
export default ExerciseCard;
