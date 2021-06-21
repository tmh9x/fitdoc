import React from 'react';
import 'tailwindcss/tailwind.css';

type ExerciseCardProps = {
  thumbnail: string;
  name: string;
  category: string;
};

function ExerciseCard({
  thumbnail,
  name,
  category,
}: ExerciseCardProps): JSX.Element {
  return (
    <article className="grid w-32 text-sm bg-secondary h-44 rounded-xl">
      <img
        className="object-cover h-24 w-44 rounded-t-xl"
        src={thumbnail}
        alt=""
      />
      <h3 className="pl-1 font-bold">{name}</h3>
      <div className="pl-1">{category}</div>
    </article>
  );
}
export default ExerciseCard;
