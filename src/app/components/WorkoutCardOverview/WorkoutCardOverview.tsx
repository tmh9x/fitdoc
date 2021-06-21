import React from 'react';
import 'tailwindcss/tailwind.css';
import Button from '../Button/Button';

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
      <div className="pt-4 pb-4 mx-auto">
        <Button children="CONTINUE" variant="secondary"></Button>
      </div>
    </article>
  );
}
export default WorkoutCardOverview;
