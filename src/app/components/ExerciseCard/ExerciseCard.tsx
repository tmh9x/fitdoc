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
    <article className="bg-secondary w-32 h-44 rounded-xl grid text-sm">
      <img
        className="w-44 h-24 rounded-t-xl object-cover"
        src={thumbnail}
        alt=""
      />
      <h3 className="pl-1 font-bold">{name}</h3>
      <div className="pl-1">{category}</div>
    </article>
  );
}
export default ExerciseCard;
