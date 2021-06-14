import React from 'react';
import 'tailwindcss/tailwind.css';

type WorkoutCardSmallProps = {
  thumbnail: string;
  name: string;
  category: string;
  iconTimer: string;
  duration: string;
  iconLevel: string;
  level: string;
};

function workoutCardSmall({
  thumbnail,
  name,
  category,
  iconTimer,
  duration,
  iconLevel,
  level,
}: WorkoutCardSmallProps): JSX.Element {
  return (
    <article className="bg-white w-72 rounded-xl grid">
      <div className="">
        <img
          className="w-72 h-24 object-cover rounded-t-xl"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="font-sans text-sm pl-3 pt-1 pr-3">{name}</div>
      <div className="font-sans text-xs pl-3 pb-1 border-b border-dashed">
        {category}
      </div>
      <div className="flex font-sans text-xs text-gray-400 pl-3 pt-1 pr-3 pb-1">
        <img className="w-4 h-4 mr-1" src={iconTimer} alt="" />
        {duration}
        <img className="w-3.5 h-3.5 mr-1 ml-5" src={iconLevel} alt="" />
        {level}
      </div>
    </article>
  );
}
export default workoutCardSmall;
