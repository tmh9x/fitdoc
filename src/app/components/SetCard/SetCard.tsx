import React from 'react';
import 'tailwindcss/tailwind.css';

type SetCardProps = {
  name: string;
  sets: { repetitions: number; weight: number }[];
};

function SetCard({ name, sets }: SetCardProps): JSX.Element {
  const setList = sets.map((set, index) => (
    <div
      className="grid grid-cols-4 text-center border-b border-dashed last:border-none"
      key={index}
    >
      <div className="pt-2 pb-2">set {index + 1}</div>
      <div className="pt-2 pb-2">{set.repetitions}</div>
      <div className="pt-2 pb-2">:</div>
      <div className="pt-2 pb-2">{set.weight}</div>
    </div>
  ));
  return (
    <div className="pt-2 w-80 rounded-xl bg-secondary">
      <h2 className="pl-4 font-bold">{name}</h2>
      <div>{setList}</div>
    </div>
  );
}

export default SetCard;
