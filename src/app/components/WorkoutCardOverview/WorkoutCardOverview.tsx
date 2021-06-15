import React from 'react';
import 'tailwindcss/tailwind.css';

type WorkoutCardOverviewProps = {
  thumbnail: string;
  name: string;
  description: string;
};

function WorkoutCardOverview({
  thumbnail,
  name,
  description,
}: WorkoutCardOverviewProps): JSX.Element {
  return (
    <article className="bg-secondary w-80 rounded-xl grid auto-rows-min">
      <img className="rounded-t-xl" src={thumbnail} alt="" />
      <h1 className="font-bold pt-6 px-4 text-xl">{name}</h1>
      <p className="pt-2 px-4">{description}</p>
      <a className="text-secondary w-64 pt-2 pb-2 text-center place-self-center mt-4 mb-4 border bg-buttonVar1 rounded-xl">
        START WORKOUT
      </a>
    </article>
  );
}
export default WorkoutCardOverview;
