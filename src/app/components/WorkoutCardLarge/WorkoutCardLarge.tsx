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
    <article className="grid grid-cols-2 grid-rows-2 text-primary w-80 rounded-xl">
      <div className="col-start-1 col-end-3 row-start-1 row-end-3">
        <img className="rounded-xl" src={thumbnail} alt="" />
      </div>
      <div className="w-48 col-start-2 col-end-3 row-start-2 row-end-3 bg-transparent place-self-end justify-self-end">
        <p className="pt-1 pb-1 pl-3 pr-3 font-sans font-bold text-center bg-secondary rounded-tl-xl rounded-br-xl">
          {name}
        </p>
      </div>
    </article>
  );
}
export default WorkoutCardLarge;
