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
    <article className="w-32 h-44 rounded-xl grid">
      <div className="">
        <img
          className="w-44 h-24 rounded-t-xl object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="pl-1 text-sm font-bold">{name}</div>
      <div className="pl-1 text-sm">{category}</div>
    </article>
  );
}
export default ExerciseCard;
