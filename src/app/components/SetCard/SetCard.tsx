import React from 'react';
import 'tailwindcss/tailwind.css';

type SetCardProps = {
  name: string;
  sets: { repetitions: number; weight: number }[];
};

function SetCard({ name, sets }: SetCardProps): JSX.Element {
  const setList = sets.map((_set, index) => (
    <div
      className="grid grid-cols-4 text-center border-b border-dashed last:border-none"
      key={index}
    >
      <div className="py-2">set {index + 1}</div>
      <input
        type="number"
        placeholder="reps"
        className="py-2 text-right"
      ></input>
      <div className="py-2">:</div>
      <input type="number" placeholder="weight" className="py-2"></input>
    </div>
  ));
  return (
    <div className="p-2 mb-4 last:mb-0 w-80 rounded-xl bg-secondary">
      <h2 className="pt-2 pl-4 font-bold">{name}</h2>
      {setList}
    </div>
  );
}

export default SetCard;
