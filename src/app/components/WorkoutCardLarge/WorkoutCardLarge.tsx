import React from 'react';
import 'tailwindcss/tailwind.css';

type WorkoutCardLargeProps = {
  thumbnail: string;
  name: string;
};

function WorkoutCardLarge({
  thumbnail,
  name,
}: WorkoutCardLargeProps): JSX.Element {
  return (
    <article className="w-80 rounded-3xl grid grid-cols-2 grid-rows-2">
      <div className="row-start-1 row-end-3 col-start-1 col-end-3">
        <img className="rounded-3xl" src={thumbnail} alt="" />
      </div>
      <div className="w-48 bg-transparent row-start-2 row-end-3 col-start-2 col-end-3 place-self-end justify-self-end">
        <p className="bg-secondary font-sans text-center rounded-tl-xl rounded-br-xl pt-1 pl-3 pb-1 pr-3">
          {name}
        </p>
      </div>
    </article>
  );
}
export default WorkoutCardLarge;
