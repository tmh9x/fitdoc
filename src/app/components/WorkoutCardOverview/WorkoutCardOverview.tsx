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
    <article className="grid bg-secondary w-80 rounded-xl auto-rows-min">
      <img className="rounded-t-xl" src={thumbnail} alt="" />
      <h1 className="px-4 pt-6 text-xl font-bold">{name}</h1>
      <p className="px-4 pt-2">{description}</p>
      <a className="w-64 pt-2 pb-2 mt-4 mb-4 text-center border text-secondary place-self-center bg-buttonVar1 rounded-xl">
        START WORKOUT
      </a>
    </article>
  );
}
export default WorkoutCardOverview;
