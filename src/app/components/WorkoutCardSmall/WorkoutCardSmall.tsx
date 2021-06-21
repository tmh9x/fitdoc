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

function WorkoutCardSmall({
  thumbnail,
  name,
  category,
  iconTimer,
  duration,
  iconLevel,
  level,
}: WorkoutCardSmallProps): JSX.Element {
  return (
    <article className="grid bg-secondary w-72 rounded-xl">
      <div className="">
        <img
          className="object-cover h-24 w-72 rounded-t-xl"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="pt-1 pl-3 pr-3 font-sans text-sm">{name}</div>
      <div className="pb-1 pl-3 font-sans text-xs border-b border-dashed">
        {category}
      </div>
      <div className="flex pt-1 pb-1 pl-3 pr-3 font-sans text-xs text-gray-400">
        <img className="w-4 h-4 mr-1" src={iconTimer} alt="" />
        {duration}
        <img className="w-3.5 h-3.5 mr-1 ml-5" src={iconLevel} alt="" />
        {level}
      </div>
    </article>
  );
}
export default WorkoutCardSmall;
